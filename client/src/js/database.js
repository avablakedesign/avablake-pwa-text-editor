import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('putDb implemented');
  const indexDB = await openDB('jate', 1);
  const obj = indexDB.transaction('jate', 'readwrite');
  const savedObj = obj.objectStore('jate');
  const saveRequest = savedObj.put({id: 1, value: content});
  await saveRequest;
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('getDb implemented');
  const indexDB = await openDB('jate', 1);
  const obj = indexDB.transaction('jate', 'readonly');
  const savedObj = obj.objectStore('jate');
  const saveRequest = savedObj.get(1);
  const saveResult = await saveRequest;
  if(saveResult) {
    return saveResult.value;
  }
  return null;
}
initdb();
