# `$apply`

Call some function on a value as `this` and then continue with the same value.

Useful for configuration, builders, etc.

## With Xnd

```js
document.body.appendChild(
  document.createElement("form")[$apply](function () {
    this.appendChild(
      document.createElement("label")[$apply](function () {
        this.appendChild(document.createTextNode("Name: "));
        this.appendChild(
          document.createElement("input")[$apply](function () {
            this.setAttribute("name", "firstName");
          })
        );
      })
    );
    this.appendChild(
      document.createElement("button")[$apply](function () {
        this.textContent = "Save";
      })
    );
  })
);
```

## Without Xnd

```js
const form = document.createElement("form");

const label = document.createElement("label");
label.appendChild(document.createTextNode("Name: "));

const input = document.createElement("input");
input.setAttribute("name", "firstName");
label.appendChild(input);

form.appendChild(label);

const button = document.createElement("button");
button.textContent = "Save";
form.appendChild(button);

document.body.appendChild(form);
```
