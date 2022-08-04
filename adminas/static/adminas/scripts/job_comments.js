/*
    Functionality for JobComments, which appear on:
        > to-do list (presently populating the home page)
        > job
        > job_comments

    This handles:
        > Edit and delete a comment from any of the three pages
        > Create a comment (from to-do and job_comments)
        > Two types of create/edit form (one with checkboxes, one without)
        > Two ways of displaying a comment (the bigger ones on the job_comments page vs. the streamlined ones on job and to-do list)
        > Toggle the status of pinned and highlight via clicking a button
*/

const TASK_CREATE_COMMENT = 'create';
const TASK_UPDATE_COMMENT = 'update';
const CLASS_SAVE_BTN = 'save';

const CLASS_ADD_BUTTON = 'add-button';
const CLASS_ADD_COMMENT = 'comment';

const DEFAULT_COMMENT_ID = '0';
const CLASS_COMMENT_EDIT_BTN = 'edit-comment';
const CLASS_COMMENT_PINNED_TOGGLE = 'pinned-toggle';
const CLASS_COMMENT_HIGHLIGHTED_TOGGLE = 'highlighted-toggle';

const CLASS_COMMENT_CU_ELEMENT = 'job-comment-cu-container';
const ID_COMMENT_TEXTAREA = 'id_comment_contents';
const ID_COMMENT_CHECKBOX_PRIVATE = 'id_private_checkbox';
const ID_COMMENT_CHECKBOX_PINNED = 'id_pinned_checkbox';
const ID_COMMENT_CHECKBOX_HIGHLIGHTED = 'id_highlighted_checkbox';

const CLASS_INDIVIDUAL_COMMENT_ELE = 'one-comment';
const CLASS_COMMENT_MAIN = 'main';
const CLASS_COMMENT_CONTENTS = 'contents';
const CLASS_COMMENT_CONTROLS = 'controls';
const CLASS_COMMENT_FOOTER = 'footer';
const CLASS_COMMENT_OWNERSHIP = 'ownership';

const CLASS_PINNED_BTN_ON = 'pinned-status-on';
const CLASS_PINNED_BTN_OFF = 'pinned-status-off';
const CLASS_PRIVACY_STATUS = 'privacy-status';

const CLASS_ACCESS_DENIED = 'temp-warning-msg';

const CLASS_COMMENT_SECTION = 'comments';
const CLASS_COMMENTS_CONTAINER = 'comment-container';
const CLASS_ALL_COMMENTS_CONTAINER = 'all-comments';
const CLASS_PINNED_COMMENTS_CONTAINER = 'pinned';
const CLASS_HIGHLIGHTED_COMMENTS_CONTAINER = 'highlighted';
const CLASS_PREFIX_FOR_COMMENT_ID = 'id-';

const SECTION_NAMES = ['all-comments', 'pinned', 'highlighted'];

const CLASS_HIGHLIGHTED_CSS = 'highlighted';
const CLASS_EMPTY_SECTION_P = 'empty-section-notice';

const ATTR_LABEL_FORM_TYPE = 'data-form_type'
const VALUE_FORM_TYPE_FULL = 'full';
const VALUE_FORM_TYPE_CONTENT_ONLY = 'content-only';
const CLASS_HOVER_PARENT = 'hover-parent';

const CLASS_JOB_PANEL = 'panel.job';
const ID_PREFIX_JOB_PANEL_ON_TODO_LIST = 'todo_panel_job_';

const CLASS_JOB_IDENTIFIER_PANEL = 'job-identifier-pane';
const CLASS_COMMENT_INPUT_CHECKBOX_CONTAINER = 'checkbox-container';

const CLASS_WANT_STREAMLINED = 'streamlined';
const CLASS_WANT_TOGGLE_H5 = 'toggle-heading';
const CLASS_WANT_EMPTY_P = 'empty-paragraph';
const STR_FALLBACK = '???';

const KEY_COMMENT_OWNERSHIP_STRING = 'footer_str';


// Used to position backend error messages when creating a new comment has failed
const CLASS_CREATE_COMMENT_CONTAINER = 'create-comments-container';



// Assign event listeners onload
document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll(`.${CLASS_ADD_BUTTON}.${CLASS_ADD_COMMENT}`).forEach(btn => {
        btn.addEventListener('click', (e) => {
            open_jobcomment_editor_for_create(e.target);
        })
    });

    document.querySelectorAll('.' + CLASS_COMMENT_EDIT_BTN).forEach(btn => {
        btn.addEventListener('click', (e) => {
            open_jobcomment_editor_for_update(e.target);
        })
    });

    document.querySelectorAll('.' + CLASS_COMMENT_PINNED_TOGGLE).forEach(btn => {
        btn.addEventListener('click', (e) => {
            toggle_status(e.target, 'pinned');
        });
    });

    document.querySelectorAll('.' + CLASS_COMMENT_HIGHLIGHTED_TOGGLE).forEach(btn => {
        btn.addEventListener('click', (e) => {
            toggle_status(e.target, 'highlighted');
        });
    });

});










// --------------------------------------------------------------------------------------------
// Frontend Start: Open Create/Update Mode
// --------------------------------------------------------------------------------------------
// Open Create Mode: called onclick on an "add new comment" button
function open_jobcomment_editor_for_create(btn){
    // There's only supposed to be one instance of the element in existence at a time (it uses IDs, don't want those duplicated),
    // so if the user has somehow managed to open one copy and ask for a second, close the old before opening the new.
    close_jobcomment_editor();

    // Create the form-like for editing a job comment
    var job_comment_form = create_ele_jobcomment_editor(DEFAULT_COMMENT_ID, btn.dataset.form_type !== VALUE_FORM_TYPE_CONTENT_ONLY, TASK_CREATE_COMMENT);
    btn.after(job_comment_form);

    // Hide the buttons that call this function in the (vain?) hope of preventing the user from somehow opening multiple copies of the element.
    visibility_add_comment_btn(false);
    hide_all_by_class(CLASS_COMMENT_EDIT_BTN);    
}


// Open Create Mode (also used for Update): function to create input elements for creating a Job comment.
function create_ele_jobcomment_editor(comment_id, want_checkboxes, task_name){

    if (task_name === TASK_CREATE_COMMENT){
        var heading_str = 'Add Comment';
        var save_funct = save_new_job_comment;
    }
    else {
        var heading_str = 'Edit Comment';
        var save_funct = save_updated_job_comment;
    }

    let container = create_ele_jobcomment_main_container();
    container.append(create_ele_jobcomment_btn_close());
    container.append(create_ele_jobcomment_heading(heading_str));
    container.append(create_ele_jobcomment_input_contents());
    
    // Add checkboxes, if wanted
    if(want_checkboxes){
        container.append(create_ele_jobcomment_checkbox_container());
        container.append(create_ele_jobcomment_controls_container(comment_id, VALUE_FORM_TYPE_FULL));        
    }
    else {
        container.append(create_ele_jobcomment_controls_container(comment_id, VALUE_FORM_TYPE_CONTENT_ONLY));        
    }

    // Add event listener to save button
    let save_btn = container.querySelector(`.${CLASS_SAVE_BTN}`);
    save_btn.addEventListener('click', (e) => {
        save_funct(e.target);
    });   

    return container;
}

// Open Create Mode (also used for Update): component.
// Container for checkboxes for private, pinned and highlighted. Used only in the "full" version of the form-like.
function create_ele_jobcomment_checkbox_container(){
    let container = document.createElement('div');
    container.classList.add(CLASS_COMMENT_INPUT_CHECKBOX_CONTAINER);
    
    let private_label = document.createElement('label');
    private_label.innerHTML = 'Private';
    private_label.for = ID_COMMENT_CHECKBOX_PRIVATE;
    container.append(private_label);

    let private_checkbox = document.createElement('input');
    private_checkbox.type = 'checkbox';
    private_checkbox.id = ID_COMMENT_CHECKBOX_PRIVATE;
    private_checkbox.checked = true;
    container.append(private_checkbox);

    let pinned_label = document.createElement('label');
    pinned_label.innerHTML = 'Pin';
    pinned_label.for = ID_COMMENT_CHECKBOX_PINNED;
    container.append(pinned_label);

    let pinned_checkbox = document.createElement('input');
    pinned_checkbox.type = 'checkbox';
    pinned_checkbox.id = ID_COMMENT_CHECKBOX_PINNED;
    container.append(pinned_checkbox);

    let highlighted_label = document.createElement('label');
    highlighted_label.innerHTML = 'Highlight';
    highlighted_label.for = ID_COMMENT_CHECKBOX_HIGHLIGHTED;
    container.append(highlighted_label);

    let highlighted_checkbox = document.createElement('input');
    highlighted_checkbox.type = 'checkbox';
    highlighted_checkbox.id = ID_COMMENT_CHECKBOX_HIGHLIGHTED;
    container.append(highlighted_checkbox);

    return container;
}



// Open Create Mode (also used for Update): various components.
function create_ele_jobcomment_main_container(){
    let container = document.createElement('div');
    container.classList.add(CLASS_COMMENT_CU_ELEMENT);
    container.classList.add(CSS_GENERIC_PANEL);
    container.classList.add(CSS_GENERIC_FORM_LIKE);
    return container;
}
function create_ele_jobcomment_heading(heading_str){
    let h = document.createElement('h4');
    h.innerHTML = heading_str;
    return h; 
}
function create_ele_jobcomment_input_contents(){
    let main_input = document.createElement('textarea');
    main_input.name = 'contents';
    main_input.id = ID_COMMENT_TEXTAREA;
    main_input.cols = 30;
    main_input.rows = 5;
    return main_input;
}
function create_ele_jobcomment_controls_container(comment_id, form_type){
    let container = document.createElement('div');
    container.classList.add(CLASS_COMMENT_CONTROLS);

    container.append(create_ele_jobcomment_btn_save(comment_id, form_type));

    // Deleting requires an ID of an existing comment, so only add the button when there's a valid ID
    if(comment_id != DEFAULT_COMMENT_ID){
        let delete_btn = create_ele_jobcomment_btn_delete();
        container.append(delete_btn);
    }

    return container;
}
function create_ele_jobcomment_btn_save(comment_id, form_type){
    let save_btn = create_generic_ele_submit_button();
    save_btn.classList.add(CLASS_SAVE_BTN);
    save_btn.setAttribute('data-comment_id', comment_id);
    save_btn.setAttribute(ATTR_LABEL_FORM_TYPE, form_type);
    // Event listener depends on whether it's create or update, so handle that elsewhere.
    return save_btn;
}
function create_ele_jobcomment_btn_close(){
    let close_btn = create_generic_ele_cancel_button();

    close_btn.addEventListener('click', () => {
        close_jobcomment_editor();
    });

    return close_btn;
}
function create_ele_jobcomment_btn_delete(){
    let delete_btn = create_generic_ele_delete_button();
    delete_btn.addEventListener('click', (e) => {
        delete_job_comment(e.target);
    });
    return delete_btn;

}






// Cancel Create/Update Mode: called onclick of the "cancel" button located in the JobComment "form"
function close_jobcomment_editor(){
    let ele = document.querySelector('.' + CLASS_COMMENT_CU_ELEMENT);
    if(ele == null){
        // It's not open, so there's nothing to close
        return;
    }

    // If the calling button is located inside a comment element, we will have hidden the comment "content" during editing:
    // unhide that now.
    let comment_ele = ele.closest('.' + CLASS_INDIVIDUAL_COMMENT_ELE);
    ele.remove();
    if(comment_ele != null){
        visibility_comment_content(comment_ele, true);
    }

    // Restore visibility to the "open create ele" and edit buttons
    visibility_add_comment_btn(true);
    unhide_all_by_class(CLASS_COMMENT_EDIT_BTN);
    return;
}



// Open Edit Mode: called onclick of an edit button
function open_jobcomment_editor_for_update(btn){
    close_jobcomment_editor();

    let comment_ele = btn.closest('.' + CLASS_INDIVIDUAL_COMMENT_ELE);
    
    // If this comment is in the "pinned" section, we don't want settings; otherwise we do.
    let section_ele = comment_ele.closest('.' + CLASS_COMMENTS_CONTAINER);
    let want_settings = !(section_ele != null && section_ele.classList.contains(CLASS_PINNED_COMMENTS_CONTAINER));

    let edit_mode_ele = create_ele_jobcomment_editor(comment_ele.dataset.comment_id, want_settings, TASK_UPDATE_COMMENT);
    edit_mode_ele = populate_ele_jobcomment_editor_with_existing(edit_mode_ele, comment_ele, want_settings);

    comment_ele.prepend(edit_mode_ele);
    visibility_comment_content(comment_ele, false);
}

// Populate the form-like with the existing information for this comment
function populate_ele_jobcomment_editor_with_existing(editor_ele, comment_ele, want_settings){

    // Contents default = empty, so fill it with the old comment
    let old_contents = comment_ele.querySelector('.' + CLASS_COMMENT_CONTENTS).innerHTML.trim();
    editor_ele.querySelector('#' + ID_COMMENT_TEXTAREA).value = old_contents;

    if(want_settings){
        // Private status default == true
        let old_private_status = comment_ele.dataset.is_private;
        if(old_private_status.toLowerCase() == 'false'){
            editor_ele.querySelector('#' + ID_COMMENT_CHECKBOX_PRIVATE).checked = false;
        }
    
        // Pinned status default == false
        let old_pinned_status = comment_ele.dataset.is_pinned;
        if(old_pinned_status.toLowerCase() == 'true'){
            editor_ele.querySelector('#' + ID_COMMENT_CHECKBOX_PINNED).checked = true;
        }
    
        // Highlighted status default == false
        let old_highlighted_status = comment_ele.dataset.is_highlighted;
        if(old_highlighted_status.toLowerCase() == 'true'){
            editor_ele.querySelector('#' + ID_COMMENT_CHECKBOX_HIGHLIGHTED).checked = true;
        }        
    }

    return editor_ele;
}

// Open Edit Mode: hide/show the "read" portions of the comments
function visibility_comment_content(comment_ele, want_visibility){
    let details_ele = comment_ele.querySelector('details');
    if(details_ele == null) return;

    visibility_element(comment_ele.querySelector('details'), want_visibility);

    if(want_visibility){
        // Re-hides the comment footer
        details_ele.removeAttribute('open');
    }
    return;
}

// Open Create/Edit Mode: hide/show the add comment button
function visibility_add_comment_btn(want_visibility){

    if(want_visibility){
        unhide_all_by_class(`${CLASS_ADD_BUTTON}.${CLASS_ADD_COMMENT}`);
    }
    else {
        hide_all_by_class(`${CLASS_ADD_BUTTON}.${CLASS_ADD_COMMENT}`);
    }
}













// --------------------------------------------------------------------------------------------
// Backend (Create, Update)
// --------------------------------------------------------------------------------------------
// Backend (Create): called onclick of the "save" button on the JobComment form-like
async function save_new_job_comment(btn){
    let data = get_comment_obj_for_backend_from_editor(btn);
    let response_data = await backend_create_job_comment(btn, data);

    if(status_is_good(response_data, 201)){
        data['id'] = response_data['id'];
        data[KEY_COMMENT_OWNERSHIP_STRING] = `You on ${response_data['created_on']}`;
        data['job_id'] = get_job_id_for_comments(btn);
        update_job_page_comments_after_create(data); 
    }
    else {
        update_job_page_comments_after_failed_create(response_data, btn);
    }
}

// Backend (Update): called onclick of the "save" button on the JobComment form-like
async function save_updated_job_comment(btn){
    let data = get_comment_obj_for_backend_from_editor(btn);
    let response_data = await backend_update_job_comment(btn, data);

    if(status_is_good(response_data, 204)){
        data['id'] = btn.dataset.comment_id;
        data[KEY_COMMENT_OWNERSHIP_STRING] = get_ownership_string_from_existing_comment(btn);
        data['job_id'] = get_job_id_for_comments(btn);
        update_job_page_comments_after_update(data);
    }
    else {
        update_job_page_comments_after_failed_update(response_data, btn);
    }
}

function get_ownership_string_from_existing_comment(editor_save_btn){
    let comment_ele = editor_save_btn.closest(`.${CLASS_INDIVIDUAL_COMMENT_ELE}`);
    let ownership_ele = comment_ele.querySelector(`.${CLASS_COMMENT_OWNERSHIP}`);
    return ownership_ele.innerHTML;
}


// Backend (Create&Update): Get an obj of comment info from the appropriate comment type
function get_comment_obj_for_backend_from_editor(btn){
    if(btn.dataset.form_type == VALUE_FORM_TYPE_CONTENT_ONLY){
        return get_comment_obj_for_backend_from_simplified_editor(btn);   
    }
    else {
        return get_comment_obj_for_backend_from_full_editor();
    }    
}

function get_default_comment_settings(){
    // Set "default statuses" for use on new comments.
    // "private = true" is a safer default than the alternative.
    // "pinned" and "highlighted" are for users to set, they default to false.
    return {
        'contents': document.getElementById(ID_COMMENT_TEXTAREA).value,
        'private': true,
        'pinned': false,
        'highlighted': false
    };
}

// Backend (Create&Update): Creates a dict with job comment info, based on a comment with checkbox settings
function get_comment_obj_for_backend_from_full_editor(){

    // Default settings = populates contents and assigns fallbacks for the checkboxes
    let result = get_default_comment_settings();

    let private_checkbox = document.getElementById(ID_COMMENT_CHECKBOX_PRIVATE);
    if(private_checkbox != null){
        result['private'] = private_checkbox.checked;
    }

    let pinned_checkbox = document.getElementById(ID_COMMENT_CHECKBOX_PINNED);
    if(pinned_checkbox != null){
        result['pinned'] = pinned_checkbox.checked;
    }

    let highlighted_checkbox = document.getElementById(ID_COMMENT_CHECKBOX_HIGHLIGHTED);
    if(highlighted_checkbox != null){
        result['highlighted'] = highlighted_checkbox.checked;
    }    

    return result;
}

// Backend (Create&Update): Creates a dict with job comment info, based on a comment editor which lacks checkboxes
function get_comment_obj_for_backend_from_simplified_editor(btn){

    // Note: reason for pinned = true.
    // The simplified form is only used to create a new comment from the todo list, where only pinned comments appear. 
    // This means "pinned = true" is the more sensible default for the new comments.
    let result = get_default_comment_settings();
    result['pinned'] = true;

    // Overwrite the defaults with existing settings if the user is updating an existing comment
    let comment_ele = btn.closest(`.${CLASS_INDIVIDUAL_COMMENT_ELE}`);
    if(comment_ele != null){
        result['private'] = comment_ele.dataset.is_private.toLowerCase() == 'true';
        result['pinned'] = comment_ele.dataset.is_pinned.toLowerCase() == 'true';
        result['highlighted'] = comment_ele.dataset.is_highlighted.toLowerCase() == 'true';
    }

    return result;
}



// Backend (Create): prepare the data and send it off to the server
async function backend_create_job_comment(btn, data){
    return await update_backend_comment(btn, data, 'POST');
}

// Backend (Update): prepare the data and send it off to the server
async function backend_update_job_comment(btn, data){
    return await update_backend_comment(btn, data, 'PUT', `id=${btn.dataset.comment_id}`);
}

// Backend (Create & Update)
async function update_backend_comment(btn, data, method, get_params = null){
    let url = get_jobcomments_url(btn);
    let request_options = get_request_options(method, get_backend_comment_data(data));

    let get_params_str = '';
    if(get_params !== null){
        get_params_str = `&${get_params}`;
    }

    return await update_backend(`${url}${get_params_str}`, request_options);
}

function get_backend_comment_data(data){
    return {
        'contents': data['contents'],
        'private': data['private'],
        'pinned': data['pinned'],
        'highlighted': data['highlighted']
    }
}

// Backend (all): determine the URL/Job ID for Job Comments
function get_jobcomments_url(ele_inside_comment_div){
    // The URL contains the job ID number, which needs to be handled slightly differently on different pages.

    // If the page covers a single job, the single URL is declared as a const in the script tags.
    if(typeof URL_COMMENTS_WITH_JOB !== 'undefined'){
        return URL_COMMENTS_WITH_JOB;
    }
    // That won't work on pages covering multiple jobs, so instead the URL is added as a dataset attribute to the comment section container.
    else {
        let container_div = ele_inside_comment_div.closest(`.${CLASS_COMMENT_SECTION}`);
        return container_div.dataset.url_comments;
    }
}

function get_job_id_for_comments(ele_in_job_panel){
    if(typeof JOB_ID !== 'undefined'){
        return JOB_ID;
    }

    let job_panel = ele_in_job_panel.closest(`.${CLASS_JOB_PANEL}`);
    if(job_panel !== null){
        return job_panel.dataset.job_id;
    }
    
    return -1;
}


// --------------------------------------------------------------------------------------------
// Backend (Delete)
// --------------------------------------------------------------------------------------------
// Backend (Delete): called onclick
async function delete_job_comment(btn){
    let comment_ele = btn.closest('.' + CLASS_INDIVIDUAL_COMMENT_ELE);
    let data = await delete_job_comment_on_server(btn, comment_ele.dataset.comment_id);
    if(status_is_good(data, 204)){
        update_job_page_comments_after_delete(comment_ele.dataset.comment_id);
    } else {
        update_job_page_comments_after_failed_update(data, btn);       
    }
}

// Send the data off, then return the response
async function delete_job_comment_on_server(btn, comment_id){
    let url = get_jobcomments_url(btn);
    let request_options = get_request_options('DELETE');
    return await update_backend(`${url}&id=${comment_id}`, request_options);
}



















// --------------------------------------------------------------------------------------------
// Frontend End: following JobComment Create
// --------------------------------------------------------------------------------------------
// DOM (Create): main function, managing post-creation frontend changes
function update_job_page_comments_after_create(comment_obj){
    close_jobcomment_editor();

    let class_to_find_comment = get_class_to_find_comment(comment_obj['id']);
    add_comment_to_section(class_to_find_comment, CLASS_ALL_COMMENTS_CONTAINER, comment_obj);

    if(comment_obj['pinned']){
        add_comment_to_section(class_to_find_comment, CLASS_PINNED_COMMENTS_CONTAINER, comment_obj);
    }

    if(comment_obj['highlighted']){
        add_comment_to_section(class_to_find_comment, CLASS_HIGHLIGHTED_COMMENTS_CONTAINER, comment_obj);
    }

    remove_all_jobcomment_warnings();
}

function update_job_page_comments_after_failed_create(response_data, submit_btn){
    let create_comment_container = submit_btn.closest(`.${CLASS_CREATE_COMMENT_CONTAINER}`);
    close_jobcomment_editor();
    remove_all_jobcomment_warnings();
    
    let error_message_ele = create_dismissable_error(response_data);
    add_error_comment_creation(error_message_ele, create_comment_container);
}


function add_error_comment_creation(error_message_ele, button_container){
    // Places the error ele between the "open editor" button and the container for existing comments.
    let parent_ele = button_container.parentElement;
    let comments_container = parent_ele.querySelector(`.${CLASS_COMMENTS_CONTAINER}`);
    let button_container_index = get_ele_index(button_container, parent_ele);
    let comments_container_index = get_ele_index(comments_container, parent_ele);

    let open_editor_btn = button_container.querySelector(`.${CLASS_ADD_BUTTON}`);
    if(comments_container_index < button_container_index && comments_container_index != -1){
        open_editor_btn.before(error_message_ele);
        return;
    }
    open_editor_btn.after(error_message_ele);
}









// DOM (Create Comment Ele): Make a new comment element.
function create_ele_new_comment(response, want_streamlined_comment){
    let container_ele = document.createElement('article');

    container_ele.classList.add(CLASS_INDIVIDUAL_COMMENT_ELE);
    container_ele.classList.add(`${CLASS_PREFIX_FOR_COMMENT_ID}${response['id']}`);
    if(response['highlighted']){
        container_ele.classList.add(CLASS_HIGHLIGHTED_CSS);
    }

    container_ele.setAttribute('data-comment_id', response['id']);
    container_ele.setAttribute('data-is_private', response['private']);
    container_ele.setAttribute('data-is_pinned', response['pinned']);
    container_ele.setAttribute('data-is_highlighted', response['highlighted']);

    if(want_streamlined_comment){
        var details_like_ele = document.createElement('details');
        var summary_like_div = document.createElement('summary');
    }
    else {
        var details_like_ele = document.createElement('div');
        details_like_ele.classList.add('full-comment-container');
        var summary_like_div = document.createElement('div');
        summary_like_div.classList.add('comment-body');
    }

    summary_like_div.append(create_ele_comment_main_contents(response['private'], response['contents']));
    details_like_ele.append(summary_like_div);
    details_like_ele.append(create_ele_comment_footer(response));

    container_ele.append(details_like_ele);
    apply_event_listeners_to_comment(container_ele);

    return container_ele;    
}


function create_ele_comment_main_contents(is_private, body_str){
    let main_ele = document.createElement('span');
    main_ele.classList.add(CLASS_COMMENT_MAIN);
    if(is_private){
        main_ele.append(get_comment_privacy_status_ele());
    }
    main_ele.append(create_ele_comment_body_streamlined(body_str));
    return main_ele;
}

function create_ele_comment_footer(data_dict){
    let footer_ele = document.createElement('section');
    footer_ele.classList.add(CLASS_COMMENT_FOOTER);
    footer_ele.append(create_ele_comment_ownership(data_dict));
    footer_ele.append(create_ele_comment_controls(data_dict['pinned']));
    return footer_ele;
}


// DOM (Create Comment): JobComment div with the comment itself inside
function create_ele_comment_body_streamlined(contents){
    let ele = document.createElement('span');
    ele.classList.add(CLASS_COMMENT_CONTENTS);
    ele.innerHTML = contents;
    return ele;
}

function create_ele_comment_body(contents){
    let contents_ele = document.createElement('div');
    contents_ele.classList.add(CLASS_COMMENT_CONTENTS);

    let ele = document.createElement('span');
    ele.innerHTML = contents;
    contents_ele.append(ele);

    return contents_ele;
}

// DOM (Create Comment): JobComment div with the pinned and edit buttons inside
function create_ele_comment_controls(is_pinned){
    let controls_ele = document.createElement('div');
    controls_ele.classList.add(CLASS_COMMENT_CONTROLS);

    let pinned_btn = document.createElement('button');
    pinned_btn.classList.add(CLASS_COMMENT_PINNED_TOGGLE);
    if(is_pinned){
        pinned_btn.classList.add(CLASS_PINNED_BTN_ON);
        pinned_btn.innerHTML = 'unpin';
    } else {
        pinned_btn.classList.add(CLASS_PINNED_BTN_OFF);
        pinned_btn.innerHTML = 'pin';
    }
    controls_ele.append(pinned_btn);

    let highlighted_btn = document.createElement('button');
    highlighted_btn.classList.add(CLASS_COMMENT_HIGHLIGHTED_TOGGLE);
    highlighted_btn.innerHTML = '+/- highlight';
    controls_ele.append(highlighted_btn);
    
    let edit_btn = document.createElement('button');
    edit_btn.classList.add(CLASS_COMMENT_EDIT_BTN);
    edit_btn.innerHTML = 'edit';
    controls_ele.append(edit_btn);

    return controls_ele;
}

// DOM (Create Comment): JobComment div with the user, timestamp and privacy status inside
function create_ele_comment_ownership(data_dict){
    let result = document.createElement('div');
    result.classList.add(CLASS_COMMENT_OWNERSHIP);
   
    let str = 'Unknown user at unknown time';
    if(KEY_COMMENT_OWNERSHIP_STRING in data_dict){
        str = data_dict[KEY_COMMENT_OWNERSHIP_STRING];
    }
    else if('created_by' in data_dict && 'created_on' in data_dict){
        str = `${data_dict['created_by']} on ${data_dict['created_on']}`; 
    }
    result.innerHTML = str;
    
    return result;
}

// DOM (Create): Apply event listeners to a comment's buttons. (Doing this separately so it can also be used by clones.)
function apply_event_listeners_to_comment(comment_div){

    add_event_listener_if_element_exists(comment_div.querySelector('.' + CLASS_COMMENT_EDIT_BTN), (e) => {
        open_jobcomment_editor_for_update(e.target);
    });

    add_event_listener_if_element_exists(comment_div.querySelector('.' + CLASS_COMMENT_PINNED_TOGGLE), (e) => {
        toggle_status(e.target, 'pinned');
   });

    add_event_listener_if_element_exists(comment_div.querySelector('.' + CLASS_COMMENT_HIGHLIGHTED_TOGGLE), (e) => {
         toggle_status(e.target, 'highlighted');
    });

}


// --------------------------------------------------------------------------------------------
// Frontend End: following JobComment Update
// --------------------------------------------------------------------------------------------
// DOM (Update): called by the handler function
function update_job_page_comments_after_update(response){
    // Remove the edit form
    close_jobcomment_editor();

    // Update any copies of this comment on the page to reflect the changes the user just made
    document.querySelectorAll(`.${CLASS_PREFIX_FOR_COMMENT_ID}${response['id']}`).forEach(ele =>{
        update_comment_ele(response, ele);
    });

    // The user could've updated a status that affects where/how many times the comment appears on the page, so handle that next
    update_comment_presence_in_all_filtered_sections(response);
}

// DOM (Update): Loop through all "special" comment sections, ensuring the updated comment appears where it should.
function update_comment_presence_in_all_filtered_sections(response){
    for(let i = 0; i < SECTION_NAMES.length; i++){
        if(SECTION_NAMES[i] != CLASS_ALL_COMMENTS_CONTAINER){
            update_comment_presence_in_one_filtered_section(response, SECTION_NAMES[i]);
        }
    }
    return;
}

// DOM (Update/Delete): Check if the updated comment should appear in this one specific section and update accordingly.
function update_comment_presence_in_one_filtered_section(response, section_class){
    // The assumption is that all filtered sections will have a single name that's used for both a CSS class and a key in the response dict to a boolean value.
    let class_to_find_comment = `${CLASS_PREFIX_FOR_COMMENT_ID}${response['id']}`;
    if(!response[section_class]){
        remove_comment_from_section(class_to_find_comment, section_class);
    }
    else if(response[section_class]){
        add_comment_to_section(class_to_find_comment, section_class, response);
    }
    return;
}


// DOM (Update): Dig into a standard comment element and update everything.
function update_comment_ele(response, comment_ele){
    // Update where the comment contents are displayed
    let contents_ele = comment_ele.querySelector('.' + CLASS_COMMENT_CONTENTS);
    contents_ele.innerHTML = response['contents'];

    // Update toggle-able statuses
    update_frontend_comment_pinned_status(comment_ele, response['pinned']);
    update_frontend_comment_highlighted_status(comment_ele, response['highlighted']);
    update_frontend_comment_private_status(comment_ele, response['private']);
}

// DOM Update / DOM Pinned Toggle: update the pinned button
function update_comment_pinned_btn(pinned_btn, want_on){
    let is_on = pinned_btn.classList.contains(CLASS_PINNED_BTN_ON);
    if(is_on && !want_on){
        pinned_btn.classList.remove(CLASS_PINNED_BTN_ON);
        pinned_btn.classList.add(CLASS_PINNED_BTN_OFF);
        pinned_btn.innerHTML = 'pin';
    }
    else if(!is_on && want_on){
        pinned_btn.classList.add(CLASS_PINNED_BTN_ON);
        pinned_btn.classList.remove(CLASS_PINNED_BTN_OFF);
        pinned_btn.innerHTML = 'unpin';
    }
    return;
}



// DOM (Update/Create): Get privacy-status element
function get_comment_privacy_status_ele(){
    let result = document.createElement('div');
    result.classList.add(CLASS_PRIVACY_STATUS);
    result.innerHTML = '[PRIVATE]';
    return result;
}




// --------------------------------------------------------------------------------------------
// Frontend End: following JobComment Denied
// --------------------------------------------------------------------------------------------
// DOM Denied: called by handler function
function update_job_page_comments_after_failed_update(response_data, btn){
    let comment_ele = btn.closest('.' + CLASS_INDIVIDUAL_COMMENT_ELE)
    close_jobcomment_editor();

    let contents_ele = comment_ele.querySelector('.contents');
    let access_denied_ele = create_dismissable_error(response_data);
    contents_ele.prepend(access_denied_ele);
}



// --------------------------------------------------------------------------------------------
// Frontend End: following JobComment Delete
// --------------------------------------------------------------------------------------------
function update_job_page_comments_after_delete(comment_id){
    // Update all remaining copies of this comment to reflect the changes the user just made
    document.querySelectorAll(`.${CLASS_PREFIX_FOR_COMMENT_ID}${comment_id}`).forEach(ele =>{
        let container = ele.closest(`.${CLASS_COMMENTS_CONTAINER}`);
        ele.remove();
        handle_section_emptiness(container);
    });
}



// --------------------------------------------------------------------------------------------
// JobComment Utils
// --------------------------------------------------------------------------------------------
function get_class_to_find_comment(comment_id){
    return `${CLASS_PREFIX_FOR_COMMENT_ID}${comment_id}`;
}

// JobComment utils: remove any warnings
function remove_all_jobcomment_warnings(){
    document.querySelectorAll('.' + CLASS_ACCESS_DENIED).forEach(ele => {
        ele.remove();
    });
}

// JobComment utils: hide/show an element via a CSS class as required
function visibility_element(element, want_visibility){
    if(element == null){
        // If the element doesn't exist then it's as hidden as hidden can be, which is great if we wanted to hide it.
        // If we wanted to show it then eh, can't hope to fix that with a CSS class, so just give up.
        return;
    }

    let have_visibility = !element.classList.contains('hide');
    if(want_visibility && !have_visibility){
        element.classList.remove('hide');
    }
    else if(!want_visibility && have_visibility){
        element.classList.add('hide');
    }
    return;
}











// --------------------------------------------------------------------------------------------
// Toggle Status
// --------------------------------------------------------------------------------------------

async function toggle_status(btn, toggled_attribute){

    let comment_ele = btn.closest('.' + CLASS_INDIVIDUAL_COMMENT_ELE);
    if(comment_ele == null){
        return;
    }

    if('pinned' === toggled_attribute){
        var previous_attr = comment_ele.dataset.is_pinned;
    }
    else if('highlighted' === toggled_attribute){
        var previous_attr = comment_ele.dataset.is_highlighted;
    }
    else {
        console.log("Error: Can't find previous comment status");
        return;
    }

    var previous = previous_attr.toLowerCase() === 'true';
    let url = get_jobcomments_url(btn);
    let response_data = await update_backend_for_comment_toggle(url, comment_ele.dataset.comment_id, !previous, toggled_attribute);
    if(status_is_good(response_data, 204)){
        update_frontend_for_comment_toggle(comment_ele, !previous, toggled_attribute);
    }
    else{
        alert(get_error_message(response_data));
    }
}

async function update_backend_for_comment_toggle(url, comment_id, new_status, toggled_attribute){
    let body_obj = {}
    body_obj[toggled_attribute] = new_status;
    
    let request_options = get_request_options('PUT', body_obj);

    return await fetch(`${url}&id=${comment_id}`, request_options)
    .then(response => get_json_with_status(response))
    .catch(error => {
        console.log('Error: ', error);
    });
}

function update_frontend_for_comment_toggle(comment_ele, new_status, toggled_attribute){

    let class_to_find_comment = get_class_to_find_comment(comment_ele.dataset.comment_id);

    // Look for instances of this comment on the page and update them all
    document.querySelectorAll(`.${class_to_find_comment}`).forEach(comment_ele => {
        if('pinned' == toggled_attribute){
            update_frontend_comment_pinned_status(comment_ele, new_status);
        }
        else if('highlighted' == toggled_attribute){
            update_frontend_comment_highlighted_status(comment_ele, new_status);
        }
    });

    // Handle the presence of the comment in the status-relevant sections.
    if(new_status){
        add_comment_to_section(class_to_find_comment, toggled_attribute);
    }
    else if(!new_status){
        remove_comment_from_section(class_to_find_comment, toggled_attribute);
    }
}


function get_comment_data_from_ele(ele){
    let result = {};
    result['id'] = ele.dataset.comment_id;
    result['footer_str'] = ele.querySelector(`.${CLASS_COMMENT_OWNERSHIP}`).innerHTML.trim();
    result['contents'] = ele.querySelector(`.${CLASS_COMMENT_CONTENTS}`).innerHTML.trim();
    result['private'] = ele.dataset.is_private.toLowerCase() == 'true';
    result['pinned'] = ele.dataset.is_pinned.toLowerCase() == 'true';
    result['highlighted'] = ele.dataset.is_highlighted.toLowerCase() == 'true';
    result['job_id'] = get_job_id_for_comments(ele);
    return result;
}


function update_frontend_comment_pinned_status(comment_ele, is_pinned){
    comment_ele.setAttribute('data-is_pinned', is_pinned);

    let pinned_btn = comment_ele.querySelector('.' + CLASS_COMMENT_PINNED_TOGGLE);
    update_comment_pinned_btn(pinned_btn, is_pinned);

    return;
}

function update_frontend_comment_highlighted_status(comment_ele, is_highlighted){
    comment_ele.setAttribute('data-is_highlighted', is_highlighted);

    let have_highlighted = comment_ele.classList.contains(CLASS_HIGHLIGHTED_CSS);
    if(is_highlighted && !have_highlighted){
        comment_ele.classList.add(CLASS_HIGHLIGHTED_CSS);
    }
    else if(!is_highlighted && have_highlighted){
        comment_ele.classList.remove(CLASS_HIGHLIGHTED_CSS);
    }

    return;
}

function update_frontend_comment_private_status(comment_ele, is_private){
    comment_ele.setAttribute('data-is_private', is_private);
    let have_private_class = comment_ele.classList.contains('private');
    
    if(have_private_class && !is_private){
        comment_ele.classList.remove('private');
    }
    else if(!have_private_class && is_private){
        comment_ele.classList.add('private');
    }

    let privacy_ele = comment_ele.querySelector('.' + CLASS_PRIVACY_STATUS);
    let have_privacy_ele = privacy_ele != null;

    if(have_privacy_ele && !is_private){
        privacy_ele.remove();
    }
    else if(!have_privacy_ele && is_private){
        let container_ele = comment_ele.querySelector(`.${CLASS_COMMENT_MAIN}`);
        container_ele.prepend(get_comment_privacy_status_ele());
    }
    return;
}





function add_comment_handle_missing_comment_data(data, class_to_find_comment){
    if(data !== null){
        return data;
    }

    let existing_comment = document.querySelector(`.${class_to_find_comment}`);
    if(existing_comment !== null){
        return get_comment_data_from_ele(existing_comment);
    }

    return null;
}


function add_comment_to_section(class_to_find_comment, section_name, comment_data = null){
    // Some pages display a subset of the possible comment sections, so begin by checking if the target section even exists on this page.
    let all_section_instances = document.querySelectorAll(`.${CLASS_COMMENTS_CONTAINER}.${section_name}`);
    if(all_section_instances.length == 0){
        return;
    }

    // The backend doesn't return data in response to toggling a single status on a comment, so there might not be any comment data.
    // In that case look for an existing copy of the comment in another section and extract comment data from there.
    comment_data = add_comment_handle_missing_comment_data(comment_data, class_to_find_comment);
    if(comment_data === null){
        return;
    }

    // If there are multiple Jobs on the page, there could be multiple sections of the same type on the page. Find the correct section.
    let section_ele = all_section_instances[0];
    if(all_section_instances.length > 1){
        if('job_id' in comment_data && 'job_id' !== -1){
            let id_to_find_job_panel = `${ID_PREFIX_JOB_PANEL_ON_TODO_LIST}${comment_data['job_id']}`;
            let job_panel = document.getElementById(id_to_find_job_panel);
            if(job_panel !== null){
                section_ele = job_panel.querySelector(`.${CLASS_COMMENTS_CONTAINER}.${section_name}`);
            }
            if(section_ele === null){
                return;
            }
        }
        else {
            // Give up. Better for the user to reload the page than stick a comment in a random incorrect section.
            return;
        }
    }

    // If something's gone askew and the comment already exists in the target section, don't add it again.
    let existing_comment_in_section = section_ele.querySelector(`.${class_to_find_comment}`);
    if(existing_comment_in_section !== null){
        return;
    }

    // There. Now we're ready to actually do the thing.
    let want_streamline_comment = section_ele.classList.contains(CLASS_WANT_STREAMLINED);
    var comment_ele = create_ele_new_comment(comment_data, want_streamline_comment);
    section_ele.prepend(comment_ele);

    // Adding that comment might've affected the emptiness of this section, so sort out the emptiness paragraph if it did.
    handle_section_emptiness(section_ele, section_name);
}

function remove_comment_from_section(class_to_find_comment, section_name){
    document.querySelectorAll(`.${CLASS_COMMENTS_CONTAINER}.${section_name}`).forEach(section_ele => {
        let comment_in_section = section_ele.querySelector(`.${class_to_find_comment}`);

        // If the comment doesn't exist in the section then... well, it probably /should/ at this point,
        // given that this is a toggle, but whatever: all's well that ends well.
        if(comment_in_section != null){
            comment_in_section.remove();
            handle_section_emptiness(section_ele, section_name);
        }
    });

    return;
}


function handle_section_emptiness(comment_section_ele, section_name=STR_FALLBACK){
    /*
        Since users can delete and add comments, there's a possibility they 
        will either empty a previously filled comment section or add the 
        first post to a previously empty section.

        There are two types of desirable behaviour:
            >   Comment section "disappears" when empty and reappears 
                when comments are added
            >   Comment section persists but displays a special message 
                when empty
        
        This function identifies which behaviour is needed in this case, 
        then removes/adds DOM elements to make it happen.
    */

    let section_is_empty = comment_section_ele.querySelectorAll(`.${CLASS_INDIVIDUAL_COMMENT_ELE}`).length === 0;

    // Set variables for "disappearing" comment sections
    if(comment_section_ele.classList.contains(CLASS_WANT_TOGGLE_H5)){
        // <h5> is there to label the comments which suddenly appeared, so it should appear when there are comments and disappear when there aren't.
        var existing = comment_section_ele.parentElement.querySelector('h5');
        var want_add = !section_is_empty;
        var want_remove = section_is_empty;
        var class_indicating_task = CLASS_WANT_TOGGLE_H5;
    }
    // Set variables for persistent comment sections
    else if(comment_section_ele.classList.contains(CLASS_WANT_EMPTY_P)){
        // <p> is there to explain the intentional emptiness of a section with a persistent heading, so it should appear when the section 
        // is empty and disappear otherwise.
        var existing = comment_section_ele.querySelector(`.${CLASS_EMPTY_SECTION_P}`);
        var want_add = section_is_empty;
        var want_remove = !section_is_empty;
        var class_indicating_task = CLASS_WANT_EMPTY_P;
    }

    if(want_add && existing === null){
        add_new_comment_emptiness_element(comment_section_ele, section_name, class_indicating_task);
    }
    else if(want_remove && existing !== null){
        existing.remove();
    }

    return;
}





function add_new_comment_emptiness_element(comment_section_ele, section_name, class_indicating_task){

    // Some "paths" to this function don't need to work out section_name for their own purposes, so the argument will be missing.
    // Try to work out the section name here. If you can't, no big deal: the two functions later are designed to handle STR_FALLBACK.
    if(section_name === STR_FALLBACK){
        let attempted_section_name = pick_out_comment_section_name(comment_section_ele);
        if(attempted_section_name !== null){
            section_name = attempted_section_name;
        }
    }

    if(class_indicating_task === CLASS_WANT_TOGGLE_H5){
        var ele = create_ele_h5_comment_uppercase(section_name);
        comment_section_ele.before(ele);
    }
    else if(class_indicating_task === CLASS_WANT_EMPTY_P){
        var ele = create_ele_p_empty_comment_section(section_name);
        comment_section_ele.prepend(ele);
    }

    return;      
}

function create_ele_h5_comment_uppercase(section_name){        
    let h5 = document.createElement('h5');

    if(section_name === STR_FALLBACK){
        h5.innerHTML = 'COMMENTS';
    }
    else{
        h5.innerHTML = section_name.toUpperCase();
    }

    return h5;
}

function create_ele_p_empty_comment_section(section_name){
    let p = document.createElement('p');
    p.classList.add(CLASS_EMPTY_SECTION_P);

    if(section_name == CLASS_HIGHLIGHTED_COMMENTS_CONTAINER || section_name == CLASS_PINNED_COMMENTS_CONTAINER){
        p.innerHTML = `No comments have been ${section_name}.`;
    }
    else {
        p.innerHTML = 'No comments yet.';
    }
    return p;
}


function pick_out_comment_section_name(ele){
    for(let s = 0; s < SECTION_NAMES.length; s++){
        if(ele.classList.contains(SECTION_NAMES[s])){
            return SECTION_NAMES[s];
        }
    }
    return null;
}


