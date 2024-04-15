import React from 'react'
import './AnalysisBox.css'
import WebIcon from '@mui/icons-material/Web';
import GroupIcon from '@mui/icons-material/Group';
import FolderZipIcon from '@mui/icons-material/FolderZip';
import ListIcon from '@mui/icons-material/List';
import MessageIcon from '@mui/icons-material/Message';
import AddCircleIcon from '@mui/icons-material/AddCircle';
export default function AnalysisBox() {
    return (
        <div className='analysisBoxes'>
            <div className="analysisBox">
                <div className="analysisBoxTitle">
                    <p>تراکنش ها</p>
                    <WebIcon />
                </div>
                <span className='analysisBoxNum'>10</span>
                <div className="analysisBoxBtn">
                    <a href="#" className='link analysisBoxLink'>مشاهده همه</a>
                    <a href="#" className='analysisBoxIcon'>
                        <AddCircleIcon />
                    </a>
                </div>
            </div>
            <div className="analysisBox">
                <div className="analysisBoxTitle">
                    <p>آگهی ها</p>
                    <ListIcon />
                </div>
                <span className='analysisBoxNum'> 46</span>
                <div className="analysisBoxBtn">
                    <a href="#" className='link analysisBoxLink'>مشاهده همه</a>
                    <a href="#" className='analysisBoxIcon'>
                        <AddCircleIcon />
                    </a>
                </div>
            </div>
            <div className="analysisBox">
                <div className="analysisBoxTitle">
                    <p>معاملات</p>
                    <GroupIcon />
                </div>
                <span className='analysisBoxNum'>22</span>
                <div className="analysisBoxBtn">
                    <a href="#" className='link analysisBoxLink'>مشاهده همه</a>
                    <a href="#" className='analysisBoxIcon'>
                        <AddCircleIcon />
                    </a>
                </div>
            </div>
            <div className="analysisBox">
                <div className="analysisBoxTitle">
                    <p>فایل ها</p>
                    <FolderZipIcon />
                </div>
                <span className='analysisBoxNum'>928</span>
                <div className="analysisBoxBtn">
                    <a href="#" className='link analysisBoxLink'>مشاهده همه</a>
                    <a href="#" className='analysisBoxIcon'>
                        <AddCircleIcon />
                    </a>
                </div>
            </div>
            <div className="analysisBox">
                <div className="analysisBoxTitle">
                    <p>بازدید</p>
                    <MessageIcon />
                </div>
                <span className='analysisBoxNum'>453</span>
                <div className="analysisBoxBtn">
                    <a href="#" className='link analysisBoxLink'>مشاهده همه</a>
                    <a href="#" className='analysisBoxIcon'>
                        <AddCircleIcon />
                    </a>
                </div>
            </div>
        </div>
    )
}
