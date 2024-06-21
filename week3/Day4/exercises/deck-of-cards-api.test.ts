import axios from 'axios'

jest.mock('axios')

import {
  shuffleDeck,
  drawCards,
  remainingCards,
  drawCard1
} from './deck-of-cards-api'
 

// We need to tell our unit tests that 'axios.get' has been mocked
// This tells typescript that we have extra mocking functions available on the mock
const mockedGet = axios.get as jest.Mock
const myServer = 'www.myserver.com/'
describe('when using the deck of cards API', () => {
  describe('when using shuffleDeck', () => {
    test('it will return a new deck ID', async () => {
      // Arrange
    
      // See https://deckofcardsapi.com/#shuffle "Shuffle the Cards" section
      const dummyApiResponse = {
        success: true,
        deck_id: '3p40paa87x90',
        shuffled: true,
        remaining: 52,
      }
      const dummyAxiosResponse = {
        data: dummyApiResponse,
      }
      mockedGet.mockResolvedValue(dummyAxiosResponse)

      // Act + Assert
      expect(await shuffleDeck(myServer)).toEqual('3p40paa87x90')

      // This could be in a separate test
      expect(mockedGet.mock.calls[0][0]).toEqual(
        `${myServer}deck/new/shuffle/?deck_count=1`
      )
    })
  })

  describe('when using drawCards', () => {
    test('drawCards', async () => {
      // todo write a test for "drawCards"
      // See https://deckofcardsapi.com/#draw-card "Draw a Card" section
      const deckID='qoak5bvcz27y'
      const number =1
      const dummyApiResponse ={
        success: true,
        deck_id: 'qoak5bvcz27y', 
        cards: 
          [{code: "KH", 
          image: "https://deckofcardsapi.com/static/img/KH.png", 
          images: {"svg": "https://deckofcardsapi.com/static/img/KH.svg", 
          png: "https://deckofcardsapi.com/static/img/KH.png"}, 
          value: "KING", 
          suit: "HEARTS"}
      ],  
          remaining: 49
      }
      const dummyAxiosResponse ={
        data: dummyApiResponse
      }
      mockedGet.mockResolvedValue(dummyAxiosResponse)
      const result = await drawCards(myServer,deckID,number)
      expect(result).toEqual(dummyApiResponse.cards)
       expect(mockedGet.mock.calls[0][0]).toEqual(
        `${myServer}deck/${ deckID }/draw/?count=${number}`
      ) 
    })
    test('drawoneCard', async () => {
      //Arrange
      
      const deckID='qoak5bvcz27y'
      const dummyApiResponse ={"success": true, 
      "deck_id": "cghpy6m7gseu", 
      "cards": [{"code": "9D", "image": "https://deckofcardsapi.com/static/img/9D.png", 
      "images": {"svg": "https://deckofcardsapi.com/static/img/9D.svg", "png": "https://deckofcardsapi.com/static/img/9D.png"}, 
      "value": "9", "suit": "DIAMONDS"}], 
      "remaining": 99}
      const dummyAxiosResponse ={
        data: dummyApiResponse
      }
      mockedGet.mockResolvedValue(dummyAxiosResponse)
      expect(await drawCard1(myServer,deckID)).toEqual(dummyApiResponse.cards)
       expect(mockedGet.mock.calls[0][0]).toEqual(
        `${myServer}deck/${ deckID }/draw/?count=1`
      ) 
    })
  })


  describe('when using remainingCards', () => {
    test('remainingCards', async () => {
      // todo write a test for "remainingCards"
      // See https://deckofcardsapi.com/#reshuffle "Reshuffle the Cards" section
      
      const deckID='cghpy6m7gseu'
      const dummyApiResponse = {"success": true, 
      "deck_id": "cghpy6m7gseu", 
      "remaining": 104, 
      "shuffled": true}
      const dummyAxiosResponse = {
        data: dummyApiResponse,
      }
      mockedGet.mockResolvedValue(dummyAxiosResponse)
      expect (await remainingCards(myServer,deckID)).toEqual(104)
      expect(mockedGet.mock.calls[0][0]).toEqual(
        `${myServer}deck/${  deckID  }/shuffle/?remaining=true`
      )
    })
  })
})
