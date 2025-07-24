import {NavigationMenu} from "@base-ui-components/react";
import { Link as RouterLink} from "react-router-dom";
import * as React from "react";

const SideMenu = () =>{
    const triggerClasses:string = 'box-border flex items-center justify-center gap-1.5 h-10 px-2 xs:px-3.5 m-0 '+
        'rounded-md bg-neutral-600 text-white font-medium text-[0.925rem] xs:text-base leading-6 select-none ' +
        'no-underline hover:bg-neutral-500 active:bg-neutral-600 active:text-neutral-600 ' +
        'data-[popup-open]:bg-neutral-500 ';

    const contentClasses:string = 'min-w-max h-full p-2 xs:w-max xs:min-w-[400px] xs:w-max ';

    const dropdownClasses:string = 'block rounded-md p-2 xs:p-3 no-underline text-white ' +
        'hover:bg-gray-100 hover:text-neutral-800';

    const popupClasses: string = "rounded-lg border-1 border-white bg-neutral-500 shadow-xl relative max-w-[var(--popup-width)] ";

    const arrowClasses:string = 'flex transition-[left] data-[side=bottom]:top-[-8px] text-neutral-800';


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

    const resourceLinks = [
        {
            href: '/resources/partners',
            title: 'Partners',
            description: 'View all partners'
        },
        {
            href: '/resources/products',
            title: 'Products',
            description: 'View all available products'
        }
    ]

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
                    className="fill-neutral-500 stroke-white stroke-[0.25]"
                />
                <path
                    d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
                    className="fill-neutral-500 stroke-white stroke-[0.25]"
                />
                <path
                    d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
                    className="dark:fill-neutral-500 stroke-white stroke-[0.25]"
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
                                        <p className="m-0 text-sm leading-5 hover:text-neutral-500 text-neutral-800">
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
                        Resources
                        <NavigationMenu.Icon className="transition-transform duration-200 ease-in-out data-[popup-open]:rotate-180">
                            <ChevronDownIcon />
                        </NavigationMenu.Icon>
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className={contentClasses}>
                        <ul className="grid list-none grid-cols-1 gap-0 @xs:grid-cols-[12rem_12rem]">
                            {resourceLinks.map((item)=>(
                                <li key={item.href}>
                                    <Link href={item.href} className={dropdownClasses}>
                                        <h3 className="m-0 mb-1 text-base leading-5 font-medium">
                                            {item.title}
                                        </h3>
                                        <p className="m-0 text-sm leading-5 hover:text-neutral-500 text-neutral-800">
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
                                        <p className="m-0 text-sm leading-5 hover:text-neutral-500 text-neutral-800">
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
                <NavigationMenu.Positioner sideOffset={7}>
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
export default SideMenu;