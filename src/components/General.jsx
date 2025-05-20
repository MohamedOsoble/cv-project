import Form from "./Form";
import Parent from "./Parent";
import Entries from "./Entries";
import { useState } from "react";

export default function General(props) {
    const dataKey = 'general';
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <Parent dataKey={dataKey}>
            {props.children}
            <Form dataKey={dataKey}
                isFormActive={activeIndex === 0}
                submitForm={() => setActiveIndex(1)}
            >
            </Form>

            <Entries dataKey={dataKey}
                isEntryActive={activeIndex === 1}
                editEntry={() => setActiveIndex(0)}
            >
            </Entries>
        </Parent>
    )

};