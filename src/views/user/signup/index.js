import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { default as app } from '../../../services/config'
import { collection, addDoc, getFirestore } from "firebase/firestore"
import { useDispatch } from 'react-redux'
import { signUp } from '../../../redux/reducer/userReducer'

export default function SignUp () {

  const formRef = useRef('form1')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const submit = () => {
    const fullname = formRef.current['fullname'].value
    const email = formRef.current['email'].value
    const password = formRef.current['password'].value

    const auth = getAuth(app)
    const db = getFirestore(app)
    createUserWithEmailAndPassword(auth, email, password, fullname)
      .then(async () => {

        const user = {
          address: "",
          avatar: "",
          banner: '',
          basket: [],
          dateJoined: new Date().getTime(),
          email,
          fullname,
          mobile: { data: {} },
          role: 'USER'
        }

        const docRef = await addDoc(collection(db, "users"), user)
        console.log('docRef', docRef)
        const docId = docRef.id
        dispatch(signUp({ docId }))
        navigate('/signin')

      }).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
      })

  }


  return (
    <div>
      <form ref={formRef}>
        <caption>SignUp</caption>
        <input type="text" name="fullname" />
        <input type="text" name="email" />
        <input type="password" name="password" />
        <input type="button" value="submit" onClick={submit} />
      </form>
    </div>
  )
}
