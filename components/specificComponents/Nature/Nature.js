import React, { Component } from "react";
import css from "./Nature.module.scss";
import Headermenu from "../../genericComponents/Headermenu/Headermenu";
import Hero from "../../genericComponents/Hero/Hero";
import Location from "../Location/Location";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { RichTextToHTML } from "../../../functions/storyBlokRichTextRenderer";
import List from "../../genericComponents/List/List";

export default class Nature extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div {...storyblokEditable(this.props.blok)}>
				<Headermenu blok={this.props.menu.content}></Headermenu>

				<main>
					<Hero blok={this.props.blok} contentTypeTag="course" />
					<div className={css["location-page__main-content"]}>
						<div id="location-page__short-description" key="location-page__short-description" className={css["location-page__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
								<div className={css["rich-text-section__rich-text"]}>{RichTextToHTML({ document: this.props.blok.description })}</div>
							</section>
						</div>
						<div className={css["location-page__short-description"]}>
                            <section className={css["rich-text-section--with-navigator"]}>
                                <h2 className={css["rich-text-section__title"]}>LOCATION</h2>
                                {this.props.blok.location && this.props.blok.location.map((loc) => (
                                    <div key={loc.uuid} style={{ marginBottom: "8px" }}>
                                        <a href={`/${loc.full_slug}`} style={{ color: "#cd8315", textDecoration: "underline" }}>
                                            {loc.content.title}
                                        </a>
                                    </div>
                                ))}
                            </section>
                        </div>
					</div>
					{this.props.blok.additionalstuff && this.props.blok.additionalstuff.map((nestedBlok) => (
							<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
						))}
				</main>
			</div>
		);

	}
}