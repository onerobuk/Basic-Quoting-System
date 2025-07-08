import {NavigationMenu} from "@base-ui-components/react";
import { Link as RouterLink} from "react-router-dom";

const Header = () =>{
    const triggerClasses:string = 'box-border flex items-center justify-center gap-1.5 h-10 px-2 xs:px-3.5 m-0 '+
        'rounded-md bg-gray-700 text-white font-medium text-[0.925rem] xs:text-base leading-6 select-none ' +
        'no-underline hover:bg-gray-100 active:bg-gray-100 active:text-gray-700 hover:text-gray-700 ' +
        'data-[popup-open]:bg-gray-100 focus-visible:outline-2 focus-visible:-outline-offset-1 ' +
        'focus-visible:outline-blue-800 focus-visible:relative '

    function Link(props: NavigationMenu.Link.Props) {
        return (
            <NavigationMenu.Link
                render={
                    <RouterLink to={props.href ?? '#'}/>
                }
                {...props}
            />
        );
    }
    return(
        <NavigationMenu.Root className="max-w-min p-2 rounded-md bg-gray-700 text-gray-700 justify-items-center">
            <NavigationMenu.List className="relative flex justify-items-center align-center bg-gray-700">
                <NavigationMenu.Item>
                    <Link className={triggerClasses}
                    href="https://google.com">Google</Link>
                </NavigationMenu.Item>
            </NavigationMenu.List>
            <NavigationMenu.Portal>
                <NavigationMenu.Backdrop />
                <NavigationMenu.Positioner>
                    <NavigationMenu.Popup>
                        <NavigationMenu.Arrow />
                        <NavigationMenu.Viewport />
                    </NavigationMenu.Popup>
                </NavigationMenu.Positioner>
            </NavigationMenu.Portal>
        </NavigationMenu.Root>
    )
}
export default Header;