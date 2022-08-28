import { Link } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";



function AddBlog() {
    const [state, setState] = useState()
    function onEditorStateChange(e) {
        console.log(e);
        setState(e)
    }
    return (
        <div className="text-center">

            <main>
                <div className="row" >
                    <div className="col">
                        <h1 className="mt-4 mb-2">Add Blog</h1></div>
                    <div className="col"></div>
                    <div className="col">
                        <br /><Link to="/profile"><button className="btn">Back</button></Link></div></div>
                <div className="row" >
                    <div className="col"></div>
                    <div className="col-9" style={{ height: 400 }}>
                        <Editor
                            editorState={state}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={onEditorStateChange}
                        />
                    </div>
                    <div className="col"></div>
                </div>
            </main>



        </div>
    );
}

export default AddBlog;
