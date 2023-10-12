import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { default as app } from '../../../services/config'
import { getDocs } from "firebase/firestore"
import { useDispatch, useSelector } from 'react-redux'
import { signInSuccess } from '../../../redux/reducer/userReducer'
import { collection, getFirestore } from "firebase/firestore"

export default function SignIn () {

  const formRef = useRef('form2')
  const navigate = useNavigate()
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()
  console.log('user.DocId signin', user.DocId)
  const signin = () => {
    const email = formRef.current['email'].value
    const password = formRef.current['password'].value
    const db = getFirestore(app)
    const auth = getAuth(app)
    signInWithEmailAndPassword(auth, email, password)
      .then(async () => {

        const querySnapshot = await getDocs(collection(db, "users"))
        querySnapshot.forEach((doc) => {
          console.log('doc.id')
          if (doc.id == user.DocId) {
            const user = doc.data()
            dispatch(signInSuccess({ user }))

            navigate('/')
          } else {
            console.log('doc.id == user.DocId', doc.id, user.DocId)
          }
        })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
      })
  }

  return (
    <div>
      <form ref={formRef} method='post'>
        <caption>SignIn</caption>
        <input type="text" name="email" />
        <input type="password" name="password" />
        <input type="button" value="submit" onClick={signin} />
      </form>
    </div>
  )
}
