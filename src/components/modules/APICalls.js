const dataURL = "https://christmaslist-ca5c9-default-rtdb.firebaseio.com"

export const getAll = () => {
    return fetch(`${dataURL}/christList.json`)
        .then(response => response.json())
}

const testItem = {
    "title": "this is a test of my updated function",
    "fbid": "-MNiYtwyYVSwddzv4OPj"
}


export const updateChristList = (listObj) => {
    //remove fbid from listObj
    const updateObj = {
        "title": listObj.title
    }
    return fetch(`${dataURL}/christList/${listObj.fbid}.json`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateObj)
    })

}

updateChristList(testItem);