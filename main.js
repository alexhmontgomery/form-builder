var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

const fieldset = document.querySelector("fieldset")

for (let i = 0; i < formData.length; i++) {
  // console.log(formData[i].type);

  if (formData[i].type === "select") {
    // const selector = document.querySelector(input)
    let select = document.createElement("select")

    select.label = formData[i].label
    select.id = formData[i].id
    select.style.width = "100%"

    fieldset.appendChild(select)

    const optionTitle = document.createElement("option")
    optionTitle.label = "Select Language..."
    optionTitle.disabled = true
    optionTitle.selected = true
    select.appendChild(optionTitle)

    for (var g = 0; g < formData[i].options.length; g++) {

      let selectOption = document.createElement("option")

      selectOption.label = formData[i].options[g].label
      selectOption.value = formData[i].options[g].value

      console.log(selectOption.label);
      console.log(selectOption.value);

      select.appendChild(selectOption)
    }

  } else if (formData[i].type === "textarea") {

    let textBox = document.createElement("textarea")

    textBox.label = formData[i].label
    textBox.id = formData[i].id
    textBox.placeholder = formData[i].label
    textBox.rows = "5"
    textBox.style.width = "100%"

    fieldset.appendChild(textBox)
  } else {

  let input = document.createElement("input")

  input.type = formData[i].type
  input.placeholder = formData[i].label
  input.label = formData[i].label
  input.id = formData[i].id
  input.style.width = "100%"

  //console.log(input);
  fieldset.appendChild(input)
  }

}
