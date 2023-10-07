import React from "react";
import "./blog.css";
import { Article } from "../../components";
import {  Article1,
  Article2,
  Article3,
  Article4,
  Article5} from './images'
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article image={Article1} date='Sep 26, 2021' title='GPT-3 and Open AI is the future. Let us exlore how it is?'/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article image={Article2} date='Sep 26, 2021' title='GPT-3 and Open AI is the future. Let us exlore how it is?'/>
          <Article image={Article3} date='Sep 26, 2021' title='GPT-3 and Open AI is the future. Let us exlore how it is?'/>
          <Article image={Article4} date='Sep 26, 2021' title='GPT-3 and Open AI is the future. Let us exlore how it is?'/>
          <Article image={Article5} date='Sep 26, 2021' title='GPT-3 and Open AI is the future. Let us exlore how it is?'/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
