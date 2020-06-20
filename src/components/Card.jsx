import React, {useState, useEffect} from "react"
import { Container, Wrapper } from "./styled"
import "../index.css"
import * as yup from "yup"
import axios from "axios"

const formSchema = yup.object().shape({
    name: yup.string().min(2, 'must include at least 2 characters').required("Name is a required field."),
    size: yup
      .mixed()
      .oneOf(["Small", "Medium", "Large", "X-Large"])
      .defined(),
    jalapeno: yup.boolean(),
    peperonni: yup.boolean(),
    sausage: yup.boolean(),
    onion: yup.boolean(),
    instruction: yup.string().min(25, "please type at least more than 5 worlds").required("must include why you'd like to join")
  });


const Card = () => {
    const [formState, setFormState] = useState({
        name: "",
        size: "",
        jalapeno: false,
        peperonni: false,
        sausage: false,
        onion: false,
        instruction: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        size: "",
        jalapeno: false,
        peperonni: false,
        sausage: false,
        onion: false,
        instruction: ""
    })



    // display date to my own page if need to
    const [post, setPost] = useState([]);

    const validateChange = e => {
        // Reach will allow us to "reach" into the schema and test only one part.
        yup
          .reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then(valid => {
            setErrors({
              ...errors,
              [e.target.name]: ""
            });
          })
          .catch(err => {
              console.log(err, 'errros')
            setErrors({
              ...errors,
              [e.target.name]: err.errors[0]
            });
          });
      };
    
      const handleToppings = e => {
        setFormState({...formState, [e.target.name]: e.target.checked })
    }

    //display button if true
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
          setButtonDisabled(!valid);
        });
      }, [formState]);


    const inputChange = e => {
        e.persist()
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
        validateChange(e)
    }

    const formSubmit = e => {
        e.preventDefault();
        axios
          .post("https://reqres.in/api/users", formState)
          .then(res => {
              console.log('submitted', res)
            setPost(res.data); // get just the form data from the REST api
    
            // reset form if successful
            setFormState({
                name: "",
                size: "",
                jalapeno: false,
                peperonni: false,
                sausage: false,
                onion: false,
                instruction: ""
            });
          })
          .catch(err => console.log(err.response));
      };


    return (
        <Container>
           <form onSubmit={formSubmit}>
            <Wrapper>
               <label htmlFor="name">
                   Name 
                   <br/>
                   <input type="text" name="name" id="text" value={formState.name} onChange={inputChange}/>
               </label>
               <br/>
               {errors.name.length > 0 ? <p>{errors.name}</p> : null}
            </Wrapper>

            <Wrapper>
                <label htmlFor="size">
                     What would you like to help with?
                     <br/>
                <select id="size" name="size" onChange={inputChange}>
                    <option value="">--PLEASE SELECT A SIZE--</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="X-Large">X-Large</option>
                </select>
                </label>
             
               {errors.size.length > 0 ? <p>{errors.size}</p> : null}
            </Wrapper>

            {/* toppings menu */}
            <Wrapper>
                <div className="wrap">
                    <label htmlFor="jalapeno" className="wrap">                     
                        <input type="checkbox" name="jalapeno" checked={formState.jalapeno} onChange={handleToppings} />
                        Jalapeno
                    </label>
                    {errors.jalapeno.length > 0 ? <p>{errors.jalapeno}</p> : null}
                </div>
                <div className="wrap">
                    <label htmlFor="peperonni" className="wrap">                       
                        <input type="checkbox" name="peperonni" checked={formState.peperonni} onChange={handleToppings} />
                        Peperonni
                    </label>
                    {errors.peperonni.length > 0 ? <p>{errors.peperonni}</p> : null}
                </div>
                <div className="wrap">
                    <label htmlFor="sausage" className="wrap">    
                        <input type="checkbox" name="sausage" checked={formState.sausage} onChange={handleToppings} />
                        Sausage
                    </label>
                    {errors.sausage.length > 0 ? <p>{errors.sausage}</p> : null}
                </div>
                <div className="wrap">
                    <label htmlFor="onion" className="wrap">              
                        <input type="checkbox" name="onion" checked={formState.onion} onChange={handleToppings} />
                        Onion
                    </label>
                    {errors.onion.length > 0 ? <p>{errors.onion}</p> : null}
                </div>
            </Wrapper>

            <Wrapper>
            <label htmlFor="instruction">
                Instructions <br/>
                <textarea name="instruction" id="instruction" placeholder="special instructions" value={formState.instruction} onChange={inputChange} />
            </label>
            {errors.instruction.length > 0 ? <p>{errors.instruction}</p> : null}
            </Wrapper>

            <pre>{JSON.stringify(post, null, 2)}</pre>
            <button type="submit" disabled={buttonDisabled} className="">PLACE ORDER</button>

           </form>
        </Container>
    )
}

export default Card;