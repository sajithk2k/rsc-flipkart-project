export const parseImageUrl = (aspectRatio,url,width) => {
    let w = width;
    let temp = aspectRatio.split(":");
    let a = Number(temp[0]) , b = Number(temp[1]);
    let h = Math.round(w*b/a);
    w = w.toString(), h = h.toString();
    let newUrl = url.replace('{@width}',w);
    newUrl = newUrl.replace('{@height}',h);
    newUrl = newUrl.replace('{@quality}','90');
    return newUrl;
}