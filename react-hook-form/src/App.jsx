import './App.css'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// this object schema create for second form 
const schema = yup.object().shape({
  firstName: yup.string().required("Must enter first name"),
  lastName: yup.string().required("Must enter seond name"),
  email: yup.string().email("Pleas enter valid email ID").required("Enter Email ID"),
  age: yup.number().integer().positive().required("please enter age"),
  password: yup.string().required().min(4,"min length 4").max(8,"maximum length 5"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), "password not match"]),
})


let count = 0;
function App() {

  count++;
 /*first form
 // const { register, handleSubmit, formState: { errors }, watch } = useForm();   //formState use for error message throw
  console.log(errors);
  console.log(watch('fName')); //watch use for rerender when state change
*/
  const { register, handleSubmit, formState: { errors }, watch ,isValid, isDirty } = useForm(
    {
      resolver:yupResolver(schema),
      mode:'onChange'
    }
  ); 
  console.log(errors);

  return (
    <>
      <div className='container'>
        <h1>{count} times rendered</h1>
        <h3>signup</h3>
        <div className="formstyle">
          {/* this form is with out Yup 
          <form onSubmit={handleSubmit(data => { console.log(data); })}>
            <div className='inputs'>
              <input type="text" {...register('fName', { required: "first name must required" })} />
              {errors?.fName && <p style={{ color: "red" }}>{errors.fName.message}</p>}
              <input type="text" {...register('lName', {
                minLength: {
                  value: 5,
                  message: "minimum length 5 is required"
                }
              })} />
              {errors?.lName && <p style={{ color: "red" }}>{errors.lName.message}</p>}
              <button>submit</button>
            </div>
          </form>
          <br />
          <br />
*/}
          {/* this form is with Yup */}
          <form onSubmit={handleSubmit(data => { console.log(data); })}>
            <div className='inputs'>
              <input {...register('firstName')} placeholder='First Name' />
               {errors?.firstName && <p style={{ color: "red" }}>{errors.firstName.message}</p>}
              <input {...register('lastName')} placeholder='Last Name' />
              {errors?.lastName && <p style={{ color: "red" }}>{errors.lastName.message}</p>}
              <input {...register('email')} placeholder='Email' />
              {errors?.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
              <input {...register('age')} placeholder='Age' />
              <input {...register('password')} type='password' placeholder='Password' />
              {errors?.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
              <input {...register('confirmPassword')} type='password' placeholder='Confirm Password' />
              {errors?.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>}
              <button disabled={isDirty && !isValid}>submit</button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default App
