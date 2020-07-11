import { SearchResult } from './SearchResults';

const exampleSearchResult0: SearchResult = {
  type: ['mental health'],
  name: 'Happiness Organization',
  coverage: ['Milwaukee, WI'],
  url: 'dicbwvibcidbciwdbib',
  physicalAddress: '321 Happiness Way, Milwaukee, WI 53218',
};

const exampleSearchResult1: SearchResult = {
  type: ['mental health'],
  name: 'Better Days Hotline',
  phoneNumber: '8765554321',
  is24HourHotline: true,
  smsNumber: '12345',
  smsTrigger: 'TALK',
  coverage: ['Wisconsin'],
  url: 'http://www.example.com/better-days-hotline',
  isOnlineChatAvailable: true,
};

const exampleSearchResult2: SearchResult = {
  type: ['mental health'],
  name: 'Sound Mind and Spirit Hotline of Wisconsin and Minnesota',
  phoneNumber: '2345556789',
  is24HourHotline: true,
  trsNumber: '1235556789',
  coverage: ['Wisconsin', 'Minnesota'],
  notes: 'press 1 for Wisconsin, 2 for Minnesota',
};

export const stubData = [
  exampleSearchResult0,
  exampleSearchResult1,
  exampleSearchResult2,
];
