    function myFunction() {
      if (username.value.length > 0) {
        const newLi = document.createElement("LI")
        newLi.textContent = username.value
        users.appendChild(newLi)
        username.value = ""

        const deleteButton = document.createElement("BUTTON")
        newLi.appendChild(deleteButton)

        deleteButton.onclick = function () {
          newLi.remove()
        }
      }
    }
    addButton.onclick = myFunction

    username.onkeyup = function (event) {
      if (event.keyCode === 13) {
        if (username.value.length > 0) {

          const newLi = document.createElement("LI")
          newLi.textContent = username.value
          users.appendChild(newLi)
          username.value = ""

          const deleteButton = document.createElement("BUTTON")
          newLi.appendChild(deleteButton)

          deleteButton.onclick = function () {
            newLi.remove()
          }
        }
      }
    }




// SpeechRecognition
const rec = new webkitSpeechRecognition()

rec.lang = "uz-UZ"

rec.onend = function () {
  console.log("Aloqa tugadi.")
}

rec.onresult = function (event) {
  const leave = confirm("Ovoz orqali aniqlangan o\'zgarishni qo'llaysizmi?")
  if (leave) {
    console.log("Qo'shdim.")
  }
  else {
    console.log("Qo'shmayaman!")
  }

  const command = event.results[0][0].transcript
  if (command === "jigar rang") {
    document.body.style.backgroundColor = "rgb(128, 136, 112)"
  }
  else if (command === "binafsha") {
    document.body.style.backgroundColor = "rgb(119, 72, 131)"
  }
  else if (command === "avvalgi") {
    document.body.style.backgroundColor = "#555"
  }
  else {
      if (leave) {
        const newLi = document.createElement("LI")
        newLi.textContent = event.results[0][0].transcript.toUpperCase().trim()
        users.appendChild(newLi)

        const deleteButton = document.createElement("BUTTON")
        newLi.appendChild(deleteButton)

        deleteButton.onclick = function () {
          newLi.remove()
        }
      }
  }
}

rec.onerror = function () {
  console.log("Xatolik yuz berdi")
}

window.onkeyup = function (event) {
  if (event.keyCode === 32) {
    rec.start()
  }
}

