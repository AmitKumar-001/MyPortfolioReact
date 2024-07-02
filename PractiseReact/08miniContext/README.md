createcontext() //not hook provided by react self
useContext() //hook

1) create context by using React.createContext();
2) export default createdContext;
3) Make context provider <createdContext.Provider value={{data, setData}}>
            {children}
        </createdContext.Provider>
4) useContext(createdContext) to access/use the data from/in from created context