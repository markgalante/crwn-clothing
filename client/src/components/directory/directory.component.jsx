import React from 'react'; 
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss'; 

const Directory = ({ sections }) => (
            <div className='directory-menu'>
                {sections.map( ({ id, ...otherSectionProps  }) =>(  /* Formally this {title, imageUrl, id, size, linkUrl}*/ 
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
                {/*
                Above is opposed to doing this: 
                    {this.state.sections.map( section =>{ 
                    <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} />
                })}
                */}
             </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory); 