import React from 'react'
import { Home, Shop, Featured, Search, Recommended, PersonalAccount, Account, Order, Wish, Detail, SignIn, SignUp } from '../views'
import { Header, Footer, Basket, NotFound } from '../components'
import { Route, Routes } from "react-router-dom"


export default function AppRouter () {
  return (
    <>
      <Header />
      <Basket />
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/shop" element={<Shop />} exact></Route>
        <Route path="/featured" element={<Featured />} exact></Route>
        <Route path="/recommended" element={<Recommended />} exact></Route>
        <Route path="/search/:searchInput" element={<Search />} exact></Route>
        <Route path="/personal" element={<PersonalAccount />} exact>
          <Route index element={<Account />}  ></Route>
          <Route path="account" element={<Account />}  ></Route>
          <Route path="wish" element={<Wish />}  ></Route>
          <Route path="orders" element={<Order />}  ></Route>
        </Route>
        <Route path='*' element={<NotFound />} />
        <Route path='/detail/:name' element={<Detail />} />
        <Route path="/signin" element={<SignIn />} exact></Route>
        <Route path="/signup" element={<SignUp />} exact></Route>
      </Routes>

      <Footer />
    </>
  )
}
