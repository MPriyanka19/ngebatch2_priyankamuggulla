export function place(board: any, player: any, column: any) {
  for (let i = 0; i < board[column].length; i++) {
    if (!board[column][i]) {
      board[column][i] = player
      return board
    }
  }
}
console.log(place([[3,6,null],[5,0,null]],4,1))
/* 3,6,null
5,0,null 
const expectedOutput = [
      ['Mike', null, null, null], 
      [null, null, null, null], 
      [null, null, null, null], 
      [null, null, null, null]
    ]
*/
