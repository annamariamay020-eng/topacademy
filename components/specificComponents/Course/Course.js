import React, { Component } from "react";
import css from "./Course.module.scss";
import Headermenu from "../../genericComponents/Headermenu/Headermenu";
import Hero from "../../genericComponents/Hero/Hero";
import TeacherCard from "../TeacherCard/TeacherCard";
import Location from "../Location/Location";
import Element from "../../genericComponents/Element/Element";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { RichTextToHTML } from "../../../functions/storyBlokRichTextRenderer";

export default class Course extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div {...storyblokEditable(this.props.blok)}>
				<Headermenu blok={this.props.menu.content}></Headermenu>
				<main>
					<Hero blok={this.props.blok} contentTypeTag="course" />
					<div className={css["course-page__main-content"]}>
						<div id="course-page__short-description" key="course-page__short-description" className={css["course-page__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
								<div className={css["rich-text-section__rich-text"]}>{RichTextToHTML({ document: this.props.blok.description })}</div>
							</section>
						</div>

						<div id="course-page__location-link" key="course-page__location-link" className={css["course-page__short-description"]}>
                            <section className={css["rich-text-section--with-navigator"]}>
                                <h2 className={css["rich-text-section__title"]}>LOCATION</h2>
                                <div className={css["rich-text-section__rich-text"]}>
                                    {this.props.blok.location && this.props.blok.location.map((loc) => (
                                        <div key={loc.uuid} style={{ marginBottom: "10px" }}>
                                            <a href={`/${loc.full_slug}`} style={{ color: "#cd8315", textDecoration: "underline" }}>
                                                {loc.content.title}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
						
					</div>

					{this.props.blok.bottombloks && this.props.blok.bottombloks.map((nestedBlok) => (
						<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
					))}
				</main>
			</div>
		);

	}
}