/* eslint-disable prettier/prettier */
import React from 'react';
import App from './App';
import {render,fireEvent} from '@testing-library/react-native';


//you can user it/test
it("should create item",()=>{
    const {getByText,getByPlaceholderText}=render(<App />);

    const saveBtn=getByText("Save");
    const textInput=getByPlaceholderText("Search");

    const createItemText="first todo"
    fireEvent.changeText(textInput,createItemText);
    fireEvent.press(saveBtn);

    const createdItem=getByText(createItemText);

    //this check the component if theres any component with this text
    expect(createdItem).not.toBeNull()

    // const test=2+3;
    // expect(test).toEqual(4)
})


//for multiple items
it("should create multiple item",()=>{
    const {getByText,getByPlaceholderText}=render(<App />);

    const saveBtn=getByText("Save");
    const textInput=getByPlaceholderText("Search");

    const createItemText="first todo"
    const createItemText_2="second todo"
    fireEvent.changeText(textInput,createItemText);
    fireEvent.press(saveBtn);


    fireEvent.changeText(textInput,createItemText_2);
    fireEvent.press(saveBtn);

    

    const createdItem=getByText(createItemText);
    const createdItem2=getByText(createItemText_2);

    expect(createdItem).not.toBeNull()
    expect(createdItem2).not.toBeNull()

    
})

//delete item
//  test("Should delete item",()=>{
//     const {getByText,queryByText,getByPlaceholderText}=render(<App/>);
//     //queryByText doesnt fail if there is a null
//     const saveBtn=getByText("Save");
//     const itemTextField=getByPlaceholderText("Search");

//     const createItem="Test item"
//     fireEvent.changeText(itemTextField,createItem);

//     fireEvent.press(saveBtn);

//     const deleteBtn=getByText("Delete");

// fireEvent.press(deleteBtn);

// const createdItem=queryByText(createItem);

// //assertion if its deleted
// expect(createdItem).toBeNull();


//  })

test("Should display error on empty item text creation",()=>{
    const {getByText}=render(<App/>);

    const saveBtn=getByText("Save");

    fireEvent.press(saveBtn);

    const errorMsg=getByText("Item is required!")
    expect(errorMsg).not.toBeNull();
});

test("Should remove error text when text is entered",()=>{
    const {getByText,queryByText,getByPlaceholderText}=render(<App/>);
const saveBtn=getByText("Save");


fireEvent.press(saveBtn);

const inputBox=getByPlaceholderText("Search");

const createdITem="First Todo";

fireEvent.changeText(inputBox,createdITem);

const errorMsg=queryByText("Item is required!");

//assertion
expect(errorMsg).toBeNull();


})
