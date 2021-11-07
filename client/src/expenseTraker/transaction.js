import React from 'react'

// export const Transaction = (props) => {
//   return (
//     <li key = {transaction.id}className="minus">
//             {props.transaction.text}
//             <button>X</button>
//     </li>
//   )
// }

export const Transaction = ({transaction}) => {
  return (
    <li key = {transaction.id}className="minus">
            {transaction.text} --- {transaction.amount}
            <button>X</button>
    </li>
  )
}
