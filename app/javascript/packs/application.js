import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "channels";
import $ from 'jquery';
import "bootstrap";

Rails.start();
Turbolinks.start();
ActiveStorage.start();

// Enable jQuery for Rails UJS
window.jQuery = $;
window.$ = $;

