import * as React from "react";
import { SearchkitManager } from "../SearchkitManager";
import { Accessor } from "../accessors/Accessor";
import { Searcher } from "../Searcher";
export declare class SearchkitComponent<P, S> extends React.Component<P, S> {
    searchkit: SearchkitManager;
    accessor: Accessor<any>;
    searcher: Searcher;
    stateListenerUnsubscribe: Function;
    static contextTypes: {
        searchkit: React.Requireable<any>;
        searcher: React.Requireable<any>;
    };
    defineAccessor(): Accessor<any>;
    leftMouseDown(fn: any): (event: any) => void;
    shouldCreateNewSearcher(): boolean;
    componentWillMount(): void;
    isLoading(): boolean;
    componentWillUnmount(): void;
}
