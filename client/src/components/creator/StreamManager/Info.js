import { CurrencyRupeeIcon } from "@heroicons/react/outline";

function StreamInfo(){
    return(
        <div className="w-1/2 bg-white dark:bg-black border-r border-t border-gray-200 dark:border-gray-900 m-0">
            <div className="chatHeader w-full h-10 dark:bg-black bg-white border-t border-gray-200 dark:border-gray-900 px-3 py-1">
                <p className="text-xl">Stream details</p>
            </div>
            <div className="p-2 px-4">
                <div class="grid grid-flow-row grid-cols-3 grid-rows-3 gap-4">
                    <div className="bg-gray-200 dark:bg-gray-900 rounded p-2 py-6 h-24 text-center">
                        <span className="text-lg mb-2">0:00:00</span>
                        <br/>
                        <span className="dark:text-gray-600">Session</span>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-900 rounded p-2 h-24 py-6 text-center">
                        <span className="text-lg mb-2">0</span>
                        <br/>
                        <span className="dark:text-gray-600">Viewer</span>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-900 rounded p-2 h-24 py-6 text-center">
                        <span className="text-lg mb-2">10</span>
                        <br/>
                        <span className="dark:text-gray-600">Views</span>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-900 rounded p-2 h-24 py-6 text-center">
                        <span className="text-lg mb-2">0</span>
                        <br/>
                        <span className="dark:text-gray-600">Followers</span>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-900 rounded p-2 h-24 py-6 text-center">
                        <span className="text-lg mb-2">10 / 1</span>
                        <br/>
                        <span className="dark:text-gray-600">Likes / Dislikes</span>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-900 rounded p-2 h-24 py-6 text-center">
                        <span className="text-lg mb-2">₹100.0</span>
                        <br/>
                        <span className="dark:text-gray-600">Revenue</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StreamInfo;