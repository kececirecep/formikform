import React from 'react'
import { useFormik } from 'formik'
import { basicSchema } from '../schemas'

const onSubmit=async(values,actions)=>{
    console.log(values);
    console.log(actions);

    await new Promise((resolve)=>{
        setTimeout(resolve,1000)
    })
    actions.resetForm()
}

const GeneralForm = () => {
    const {values,errors,isSubmitting,handleChange,handleSubmit} = useFormik({
        initialValues:{
            email:"",
            age:"",
            password:"",
            confirmPassword:""
        },
        validationSchema:basicSchema,
        onSubmit,
    })
    return (
        <form onSubmit={handleSubmit} className='w-[500px]'>
            <div>
                <label>Email</label>
                <input type="email" value={values.email} id='email' onChange={handleChange} placeholder='Mail adresinizi giriniz.' className={`w-[100%] px-2 py-1 rounded-lg border-2 border-gray-800 text-black  outline-none ${errors.email ? 'border border-red-500':''}`} />
                {errors.email && <p className='text-red-500'>{errors.email}</p>}
            </div>
            <div>
                <label>Yaş</label>
                <input type="number" value={values.age} id='age' onChange={handleChange} placeholder='Yaşınızı giriniz.' className={`w-[100%] px-2 py-1 rounded-lg border-2 border-gray-800 text-black  outline-none ${errors.email ? 'border border-red-500':''}`} />
                {errors.age && <p className='text-red-500'>{errors.age}</p>}
            </div>
            <div>
                <label>Şifre</label>
                <input type="password" value={values.password} id='password' onChange={handleChange} placeholder='Şifrenizi giriniz.' className={`w-[100%] px-2 py-1 rounded-lg border-2 border-gray-800 text-black  outline-none ${errors.email ? 'border border-red-500':''}`} />
                {errors.password && <p className='text-red-500'>{errors.password}</p>}
            </div>
            <div>
                <label>Şifre Tekrar</label>
                <input type="password" value={values.confirmPassword} id='confirmPassword' onChange={handleChange} placeholder='Şifrenizi tekrar giriniz.' className={`w-[100%] px-2 py-1 rounded-lg border-2 border-gray-800 text-black  outline-none ${errors.email ? 'border border-red-500':''}`} />
                {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword}</p>}
            </div>
            <button disabled={isSubmitting} type='submit' className='w-[100%] px-2 py-1 rounded-lg border-2 border-gray-800 text-gray-950 my-4 outline-none'>
                Kaydet
            </button>
        </form>
    )
}

export default GeneralForm