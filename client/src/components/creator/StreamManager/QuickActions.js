import {HeartIcon, PencilIcon, DesktopComputerIcon, DuplicateIcon} from '@heroicons/react/outline'

function QuickActions({theme}){
    return(
        <div className="w-1/2 bg-white dark:bg-black border-l border-t border-gray-200 dark:border-gray-900 m-0">
             <div className="chatHeader w-full h-10 dark:bg-black bg-white border-t border-gray-200 dark:border-gray-900 px-3 py-1">
                <p className="text-xl">Quick actions</p>
            </div>
            <div className="p-2 px-4">
                <div class="grid grid-flow-row grid-cols-3 grid-rows-3 gap-4">
                    <div className={"bg-"+theme+"-400 hover:bg-"+theme+"-500 cursor-pointer rounded p-3 h-24"}>
                        <span><PencilIcon className="h-8 w-8 mb-4" /></span>
                        <span className="text-lg">Edit Stream Info</span>
                    </div>
                    <div className={"bg-"+theme+"-400 hover:bg-"+theme+"-500 cursor-pointer rounded p-3 h-24"}>
                        <span><DuplicateIcon className="h-8 w-8 mb-4" /></span>
                        <span className="text-lg">Raid Channel</span>
                    </div>
                    <div className={"bg-"+theme+"-400 hover:bg-"+theme+"-500 cursor-pointer rounded p-3 h-24"}>
                        <span><DesktopComputerIcon className="h-8 w-8 mb-4" /></span>
                        <span className="text-lg">Host Channel</span>
                    </div>
                    <div className={"bg-"+theme+"-400 hover:bg-"+theme+"-500 cursor-pointer rounded p-3 h-24"}>
                        <span><HeartIcon className="h-8 w-8 mb-4" /></span>
                        <span className="text-lg">Follower only chat</span>
                    </div>
                    <div className={"bg-red-500 hover:bg-red-600 cursor-pointer rounded p-3 h-24"}>
                        <span><HeartIcon className="h-8 w-8 mb-4" /></span>
                        <span className="text-lg">End stream</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickActions;