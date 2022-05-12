// document.getElementById("search-form").addEventListener("submit", () => {
//     document.getElementById("content-loader").style.display = "flex"
//     document.getElementById("content").style.display = "none"
//     document.getElementById("content-error").style.display = "none"

//     const date = document.getElementById("date-input").value
//     loadData(date)
//     setDate(date)
// })

document.getElementById("vibrateForm").addEventListener("submit", () => {
    let length = document.getElementById("vibrateLength").value;
    window.navigator.vibrate(length);
    // alert(length);
})

// const movePrevious = () => {
//     document.getElementById("content-loader").style.display = "flex"
//     document.getElementById("content").style.display = "none"
//     document.getElementById("content-error").style.display = "none"

//     const date = localStorage.getItem("date")
//     const d = new Date(date)
//     d.setDate(d.getDate() - 1)
//     document.getElementById("date-input").valueAsDate = d
//     document.getElementById("date").innerHTML = d.toLocaleString("ru", {
//         year: "numeric",
//         month: "numeric",
//         day: "numeric"
//     })
//     loadData(document.getElementById("date-input").value)
// }

// const moveNext = () => {
//     document.getElementById("content-loader").style.display = "flex"
//     document.getElementById("content").style.display = "none"
//     document.getElementById("content-error").style.display = "none"

//     const date = localStorage.getItem("date")
//     const d = new Date(date)
//     d.setDate(d.getDate() + 1)
//     document.getElementById("date-input").valueAsDate = d
//     document.getElementById("date").innerHTML = d.toLocaleString("ru", {
//         year: "numeric",
//         month: "numeric",
//         day: "numeric"
//     })
//     loadData(document.getElementById("date-input").value)
// }

// const loadData = (date) => {
//     document.getElementById("content-connection-error").style.display = "none"
//     fetch(`https://api.nasa.gov/planetary/apod?api_key=AxeblXxeEPDiaf1VFgWtGAyTx2CqWgxB39nO9uVe&date=${date}`)
//         .then((response) => {
//             return response.json()
//         })
//         .catch(() => {
//             offlineHandler()
//         })
//         .then((data) => {
//             if (data) {
//                 localStorage.setItem("data", JSON.stringify(data))
//                 localStorage.setItem("date", document.getElementById("date-input").value)
//                 updateData(data)
//             }
//         })
// }

// const updateData = (data) => {
//     let elem
//     if (data.code == 400) {
//         console.log("error 400")
//         document.getElementById("content-loader").style.display = "none"
//         document.getElementById("content-error").style.display = "flex"
//     } else {
//         switch (data.media_type) {
//             case "image":
//                 elem = document.getElementById("daily-img")
//                 document.getElementById("daily-video").classList.remove("active")
//                 elem.attributes.src.value = data.url
//                 elem.classList.add("active")
//                 break;
//             case "video":
//                 elem = document.getElementById("daily-video")
//                 document.getElementById("daily-img").classList.remove("active")
//                 elem.attributes.src.value = data.url
//                 elem.classList.add("active")
//                 break;
//         }
//         document.getElementById("subheader").innerText = data.title
//         document.getElementById("text").innerText = data.explanation
//         document.getElementById("content-loader").style.display = "none"
//         document.getElementById("content").style.display = "flex"
//     }
// }

// const setDate = (date) => {
//     const d = new Date(date)
//     document.getElementById("date-input").valueAsDate = d
//     document.getElementById("date").innerHTML = d.toLocaleString("ru", {
//         year: "numeric",
//         month: "numeric",
//         day: "numeric"
//     })
// }

// const offlineHandler = () => {
//     document.getElementById("content-loader").style.display = "none"
//     document.getElementById("content-connection-error").style.display = "flex"
// }

// const data = localStorage.getItem("data")
// const date = localStorage.getItem("date")
// if (data && date) {
//     updateData(JSON.parse(data))
//     setDate(date)
// } else {
//     setDate(Date.now())
//     loadData(document.getElementById("date-input").value)
// }