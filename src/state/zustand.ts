import { create } from 'zustand'
import zukeeper from 'zukeeper'
type State = {
    userName: string
    updateUserName:(userName:string)=>void
}

const useStore = create<State>((set) => ({
  userName:'某个小谁',
  updateUserName: (userName) => set(() => ({userName})),
}))

export default useStore