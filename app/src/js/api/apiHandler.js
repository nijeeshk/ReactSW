const API_ROOT = 'https://steamspy.com/api.php';

export default function Fetch(options) {
    let reqUrl = `${API_ROOT}?`;
    for (const key of Object.keys(options)) {
        reqUrl += `${key}=${options[key]}&&`
    }
    reqUrl = reqUrl.substring(0, reqUrl.length - 2);
    return new Promise((resolve, reject) => {
        fetch(reqUrl)
            .then(response => resolve(response.json()))
            .catch(error => reject(error));
    });
}
