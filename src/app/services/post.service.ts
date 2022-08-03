import { IterableDiffers } from "@angular/core";
import { PostType } from "./post";


export function createPost(post: PostType){
    const itemObject = {
        id : Date.now(),
        name : post?.name,
        email : post?.email,
        phone : post?.phone,
        country : post?.country,
        gender : post?.gender,
        languages : post?.selectedLanguage,
    };
    let postArr:any = [];
    const list = localStorage.getItem('items');
    if(list){
        const listArr = JSON.parse(list as string);
        postArr = [...listArr];
    }

    postArr.push(itemObject);
    localStorage.setItem("items", JSON.stringify(postArr))

    return true;
}


export function fetchList() {
    const list = localStorage.getItem('items');
    const listArr = JSON.parse(list as string);
    return listArr;
}

export function deleteList(id:Number){
    let list = localStorage.getItem('items');
    let listArr =JSON.parse(list as string)
    let listArrTemp = [...listArr];
    let index= listArr.findIndex((element:any)=>element.id===id)
    listArrTemp.splice(index,1);
    localStorage.setItem('items', JSON.stringify(listArrTemp))
    return true;
    }

export function getDetails(id:Number) {
    let list = localStorage.getItem('items');
    let listArr =JSON.parse(list as string)
    let listArrTemp = [...listArr];
    let filterArr = listArrTemp.filter(e => e.id === Number(id));
    return filterArr;
}

export function updatePost(post:PostType,id:Number) {
    let list = localStorage.getItem('items');
    let listArr =JSON.parse(list as string)
    let listArrTemp = [...listArr];
    let index= listArrTemp.findIndex((element:any)=>element.id===Number(id));
    listArrTemp[index].name = post.name;
    listArrTemp[index].email = post.email;
    listArrTemp[index].phone = post.phone;
    listArrTemp[index].country = post.country;
    listArrTemp[index].gender = post.gender;
    listArrTemp[index].languages = post.selectedLanguage;
    localStorage.setItem('items', JSON.stringify(listArrTemp))
    return true;
}