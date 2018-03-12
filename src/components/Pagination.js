import React from 'react'

export default function Pagination() {
  return (
    <ul className="uk-pagination uk-flex-center">
        <li><a href=""><span><svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" ratio="1"><polyline fill="none" stroke="#000" strokeWidth="1.2" points="6 1 1 6 6 11"></polyline></svg></span></a></li>
        <li><a href="">1</a></li>
        <li className="uk-disabled"><span>...</span></li>
        <li><a href="">5</a></li>
        <li><a href="">6</a></li>
        <li className="uk-active"><span>7</span></li>
        <li><a href="">8</a></li>
        <li><a href=""><span><svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" ratio="1"><polyline fill="none" stroke="#000" strokeWidth="1.2" points="1 1 6 6 1 11"></polyline></svg></span></a></li>
    </ul>
  )
}
