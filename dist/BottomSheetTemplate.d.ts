/// <reference types="react" />
export declare const VisibleDispatch: import("react").Context<(() => void) | null>;
declare const BottomSheetTemplate: (props: React.PropsWithChildren<{
    onClose: () => void;
    modalState: boolean;
}>) => import("react/jsx-runtime").JSX.Element;
export default BottomSheetTemplate;
