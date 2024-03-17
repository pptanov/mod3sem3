import React, { Component } from 'react'
import {Button} from "antd";
import { useState } from 'react';

export default function AuthorizeButton() {

  const signButtonTitle = ["Войти", "Выйти"];
  const [index, setIndex] = useState(0);

  function F(){
    setIndex((index+1)%2);
  }

  return (
    <Button onClick={() => F()}>{signButtonTitle[index]}</Button>
  );
}