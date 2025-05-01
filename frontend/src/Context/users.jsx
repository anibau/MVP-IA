

export const UserContext = React.createContext({
    user:[],
    setUser: () => {}
});

export const useProvider = ({children}) => {
    const [user, setUser] = useState([]);
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>)
};