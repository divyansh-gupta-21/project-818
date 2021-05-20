function Chat() {
    return(
        <div className="h-full bg-white dark:bg-black border-l border-gray-200 dark:border-gray-900 m-0 relative" style={{width:"420px"}}>
            <div className="chatHeader shadow w-full h-10 dark:bg-black bg-white border-t border-gray-200 dark:border-gray-900 px-3 py-1">
                <p className="text-xl">Live Chat</p>
            </div>
            <div className="chats">
                <ul className="m-0 h-full w-full px-3 pb-3">
                    <li className="w-full h-auto text-sm my-3">
                        <span className="text-green-600">divyanshg21 :</span>
                        &nbsp;
                        <span className="font-semibold">
                            This is a very short message...Please respond :)
                        </span>
                    </li>
                    <li className="w-full h-auto text-sm my-3">
                        <span className="text-purple-600">divyanshg21 :</span>
                        &nbsp;
                        <span className="font-semibold">
                            This is a very short message...Please respond :)...now this is becoming bigger and bigger and bigger
                        </span>
                    </li>
                </ul>
            </div>
            <div className="chat-form absolute bottom-0 right-0 h-20 dark:bg-black bg-white border-t border-gray-200 dark:border-gray-900 w-full px-4 py-5">
                <input type="text" className="w-full h-10 bg-gray-200 dark:bg-gray-800 rounded px-3 focus:outline-none" placeholder="Send a message" />
            </div>
        </div>
    )
}

export default Chat;