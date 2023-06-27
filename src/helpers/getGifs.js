import React, { useState, useEffect } from 'react'
 

export const getGifs =async(categoria) =>{
    const apiKey = 'Ou43X9i5u17xPVctuWSU9X7iftSRJuty';
    const url = (`http://api.giphy.com/v1/gifs/search?q=${encodeURI( categoria )}&api_key=${ apiKey }`);
    const resp =  await fetch(url);
    const {data} = await resp.json();
    const gifs =data.map(img =>{
      return{
        id:img.id,
        title: img.title,
        url:img.images?.downsized_medium.url
      }
    }); 
    return gifs;
 }