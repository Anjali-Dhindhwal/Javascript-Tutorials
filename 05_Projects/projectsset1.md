# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
  console.log(button);

  button.addEventListener('click', function(e){
    console.log(e.target);

  if(e.target.id === "grey"){
    body.style.backgroundColor = e.target.id;
  } 
  if(e.target.id === "white"){
    body.style.backgroundColor = e.target.id;
  }
  if(e.target.id === "blue"){
    body.style.backgroundColor = e.target.id;
  }
  if(e.target.id === "yellow"){
    body.style.backgroundColor = e.target.id;
  }


  })
})

```

## project 2

```javascript
const form = document.querySelector('form');


form.addEventListener('submit',function(e){
e.preventDefault();

let height = parseInt(document.getElementById('height').value)
let weight = parseInt(document.getElementById('weight').value)
let result = document.querySelector('#results')

if(height === '' || height < 0 || isNaN(height)){
  result.innerHTML = `Please give a valid height ${height}`;

}
else if(weight === '' || weight < 0 || isNaN(weight)){
  result.innerHTML = `Please give a valid weight ${weight}`;
}
else{
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  result.innerHTML = `<span>${bmi}</span>`;

  let guide = document.querySelector('#weight-guide')
  if(bmi<18.6){
    guide.innerHTML = ("Under Weight") 
  }
  else if(18.6<bmi<=24.9){
    guide.innerHTML =("Normal Range")

  }
  else{
    guide.innerHTML =("Overweight")
  }
}
})
```
