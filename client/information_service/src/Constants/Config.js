export const API_URL = 'http://localhost:8888/api/v1'
export const LIMIT_SEARCH_RESULT = 8
//add script tag javascipt content layout
export const AddScriptTag = (listScript, element) => {
    if (!Array.isArray(listScript)) { return false }
    else {
        listScript.forEach((value) => {
            var script = document.createElement("script");
            script.src = value
            script.async = true
            element.appendChild(script);
        });
    }
    return true;
}

export const AddLinkTag = (listScript, element) => {
    if (!Array.isArray(listScript)) { return false }
    else {
        listScript.forEach((value) => {
            var link = document.createElement("link");
            link.href = value
            link.rel = 'stylesheet'
            link.type ='text/css'
            link.async = true
            element.appendChild(link);
        });
    }
    return true;
}