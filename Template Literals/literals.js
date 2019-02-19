const string = `Hey
this

string
is awesome!`

const string2 = `First
                Second`

const string3 = `
First
Second`.trim()

console.log(string2);
console.log(string3);


// Interpolation

const blah = 'test'
const blah2 = `something ${blah}` //something test

const foo = () => {
    return 'blah'
}

const string4 = `something ${1 + 2 + 3}`
const string5 = `something ${foo() ? 'x' : 'y'}`

console.log(string4);
console.log(string5);


// Template tags

// In Styled Components template tags are used to define CSS strings:

const Button = styled.button`
  font-size: 1.5em;
  background-color: black;
  color: white;
`

const query = gql`
  query {
    ...
  }
`
