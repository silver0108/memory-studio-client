import { atom } from 'recoil';
import { recoilPersist } from "recoil-persist";

const {persistAtom} = recoilPersist();

  export const userIdState = atom({
    key: 'userIdState',
    default: '',
    effects_UNSTABLE: [persistAtom]
  });

  export const userLoginValidState = atom({
    key: 'userLoginValidState',
    default: false,
    effects_UNSTABLE: [persistAtom]
  });

  export const groupIdState = atom({
    key: 'groupIdState',
    default: '',
    effects_UNSTABLE: [persistAtom]
  });

  export const groupMemIdState = atom({
    key: 'groupMemIdState',
    default: '',
    effects_UNSTABLE: [persistAtom]
  });