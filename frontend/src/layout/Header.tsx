import {NavigationMenu} from "@base-ui-components/react";
import { Link as RouterLink} from "react-router-dom";
import * as React from "react";

const Header = () =>{
    const triggerClasses:string = 'box-border flex items-center justify-center gap-1.5 h-10 px-2 xs:px-3.5 m-0 '+
        'rounded-md bg-neutral-600 text-white font-medium text-[0.925rem] xs:text-base leading-6 select-none ' +
        'no-underline hover:bg-neutral-500 active:bg-neutral-600 active:text-neutral-600 ' +
        'data-[popup-open]:bg-neutral-500 focus-visible:outline-2 focus-visible:-outline-offset-1 ' +
        'focus-visible:outline-blue-800 focus-visible:relative ';

    const contentClasses:string = 'w-[calc(100vw_-_40px)] h-full p-6 xs:w-max xs:min-w-[400px] xs:w-max ' +
        'transition-[opacity,transform,translate] duration-[var(--duration)] ease-[var(--easing)] ' +
        'data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 ' +
        'data-[starting-style]:data-[activation-direction=left]:translate-x-[-50%] ' +
        'data-[starting-style]:data-[activation-direction=right]:translate-x-[50%] ' +
        'data-[ending-style]:data-[activation-direction=left]:translate-x-[50%] ' +
        'data-[ending-style]:data-[activation-direction=right]:translate-x-[-50%] ';

    const dropdownClasses:string = 'block rounded-md p-2 xs:p-3 no-underline text-inherit ' +
        'hover:bg-gray-100 focus-visible:relative focus-visible:outline focus-visible:outline-2 ' +
        'focus-visible:-outline-offset-1 focus-visible:outline-blue-800';

    const popupClasses: string ="data-[ending-style]:easing-[ease] relative h-[var(--popup-height)] " +
        "w-max origin-[var(--transform-origin)] rounded-lg bg-[canvas] text-gray-900 shadow-lg shadow-gray-200 " +
        "outline outline-1 outline-gray-200 transition-[opacity,transform,width,height,scale,translate] " +
        "duration-[var(--duration)] ease-[var(--easing)] data-[ending-style]:scale-90 " +
        "data-[ending-style]:opacity-0 data-[ending-style]:duration-150 data-[starting-style]:scale-90" +
        " data-[starting-style]:opacity-0 min-[500px]:w-[var(--popup-width)] xs:w-[var(--popup-width)] " +
        "dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300";

    const arrowClasses:string = 'flex transition-[left] duration-[var(--duration)] ease-[var(--easing)]' +
        ' data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] ' +
        'data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 ' +
        'data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180';

    const positionerClasses:string = "box-border h-[var(--positioner-height)] w-[var(--positioner-width)]" +
        " max-w-[var(--available-width)] transition-[top,left,right,bottom] duration-[var(--duration)] " +
        "ease-[var(--easing)] before:absolute before:content-[''] data-[instant]:transition-none " +
        "data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 " +
        "data-[side=bottom]:before:h-2.5 data-[side=left]:before:top-0 data-[side=left]:before:right-[-10px] " +
        "data-[side=left]:before:bottom-0 data-[side=left]:before:w-2.5 data-[side=right]:before:top-0 " +
        "data-[side=right]:before:bottom-0 data-[side=right]:before:left-[-10px] data-[side=right]:before:w-2.5 " +
        "data-[side=top]:before:right-0 data-[side=top]:before:bottom-[-10px] data-[side=top]:before:left-0 " +
        "data-[side=top]:before:h-2.5"


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

    const registrationLinks = [
        {
            href: '/register/partner',
            title: 'Partner',
            description: 'Register as a new Buyer or Seller'
        },
        {
            href: '/register/product',
            title: 'Product',
            description: 'Register a new Product'
        }
    ]

    const quoteLinks = [
        {
            href: '/quotes/search',
            title:'Lookup',
            description: ' Look up a quote'
        },
        {
            href: '/quotes/create',
            title: 'New Quote',
            description: 'Create a New Quote'
        }
    ]

    function ChevronDownIcon(props: React.ComponentProps<'svg'>) {
        return (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
                <path d="M1 3.5L5 7.5L9 3.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        );
    }

    function ArrowSvg(props: React.ComponentProps<'svg'>) {
        return (
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
                <path
                    d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
                    className="fill-[canvas]"
                />
                <path
                    d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
                    className="fill-gray-200 dark:fill-none"
                />
                <path
                    d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
                    className="dark:fill-gray-300"
                />
            </svg>
        );
    }

    return(
        <NavigationMenu.Root className="max-w-min px-0.5 py-1 rounded-md bg-neutral-600 text-gray-700 justify-items-center">
            <NavigationMenu.List className="relative flex justify-items-center align-center bg-neutral-600">
                <NavigationMenu.Item>
                    <Link className={triggerClasses}
                    href="/">Home</Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className={triggerClasses}>
                      Quotes
                        <NavigationMenu.Icon className="transition-transform duration-200 ease-in-out data-[popup-open]:rotate-180">
                            <ChevronDownIcon />
                        </NavigationMenu.Icon>
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className={contentClasses}>
                        <ul className="grid list-none grid-cols-1 gap-0 @xs:grid-cols-[12rem_12rem]">
                            {quoteLinks.map((item)=>(
                                <li key={item.href}>
                                    <Link href={item.href} className={dropdownClasses}>
                                        <h3 className="m-0 mb-1 text-base leading-5 font-medium">
                                            {item.title}
                                        </h3>
                                        <p className="m-0 text-sm leading-5 text-gray-500">
                                            {item.description}
                                        </p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className={triggerClasses}>
                        Register
                        <NavigationMenu.Icon className="transition-transform duration-200 ease-in-out data-[popup-open]:rotate-180">
                            <ChevronDownIcon />
                        </NavigationMenu.Icon>
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className={contentClasses}>
                        <ul className="grid list-none grid-cols-1 gap-0 @xs:grid-cols-[12rem_12rem]">
                            {registrationLinks.map((item)=>(
                                <li key={item.href}>
                                    <Link href={item.href} className={dropdownClasses}>
                                        <h3 className="m-0 mb-1 text-base leading-5 font-medium">
                                            {item.title}
                                        </h3>
                                        <p className="m-0 text-sm leading-5 text-gray-500">
                                            {item.description}
                                        </p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
            </NavigationMenu.List>

            <NavigationMenu.Portal>
                <NavigationMenu.Positioner
                    sideOffset={10}
                    collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
                    className={positionerClasses}
                    style={{
                        ['--duration' as string]: '0.35s',
                        ['--easing' as string]: 'cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                >
                    <NavigationMenu.Popup className={popupClasses}>
                        <NavigationMenu.Arrow className={arrowClasses}>
                            <ArrowSvg />
                        </NavigationMenu.Arrow>
                        <NavigationMenu.Viewport className="relative h-full w-full overflow-hidden" />
                    </NavigationMenu.Popup>
                </NavigationMenu.Positioner>
            </NavigationMenu.Portal>
        </NavigationMenu.Root>
    )
}
export default Header;