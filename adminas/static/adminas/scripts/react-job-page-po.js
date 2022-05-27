// PO section on the Job page

function JobPo(props){
    // --- state
        var form_create_visibility = true;
    // -----

    return [
        <section id="job_po_section" class="item">
            <h3>Purchase Orders</h3>
            <div class="job-po-form-container">
                <JobPoAddButton     form_vis = {form_create_visibility} />
                <JobPoAddNew        form_vis = {form_create_visibility}
                                    job_id =  {props.job_id} />
            </div>
            <JobPoDiscrepancy   currency = {props.currency}
                                data = {props.po_data}/>
            <JobPoList          currency = {props.currency} 
                                po_list = {props.po_data.po_list}/>
        </section>
    ]
}

function JobPoAddButton(props){
    if(props.form_vis){
        return null;
    }
    return [
        <button id="toggle_po_form_btn" class="add-button">New PO</button>
    ]
}
function JobPoAddNew(props){
    if(!props.form_vis){
        return null;
    }

    var url_po = '/purchase_order';

    return [
        <form method="POST" action={url_po} class="form-like panel" id="po_form">
            <button type="button" class="cancel-po-form close"><span>cancel</span></button>
            <h5 class="panel-header">Add PO</h5>

            <label for="id_reference">Customer PO Number:</label><input type="text" name="reference" maxlength="50" required="" id="id_reference" />
            <label for="id_date_on_po">Date on PO:</label><input type="text" name="date_on_po" required="" id="id_date_on_po" />
            <label for="id_date_received">Date received:</label><input type="text" name="date_received" required="" id="id_date_received" />
            <label for="id_currency">Currency:</label>
            <SelectBackendOptions   select_id = {'id_currency'}
                                    select_name = {'currency'}
                                    is_required = {true}
                                    get_param = 'currencies'
                                    selected_opt_id = {null}
                                    default_opt_id = {null} />
            <label for="id_value">Value:</label><input type="number" name="value" step="0.01" required="" id="id_value" />
            <input type="hidden" name="job" value={props.job_id} id="id_job" />
            <div class="controls">
                <input type='submit' action='submit' id='po_submit_button' value='submit' class='button-primary' />
            </div>
        </form>
    ]
}

// Conditionally displayed when there's a mismatch with prices
function JobPoDiscrepancy(props){
    if(props.data.difference == 0){
        return null;
    }

    var difference_as_perc = props.data.difference / props.data.total_items_value * 100;
    return [
        <div class="po-discrepancy warning subsection">
            <h4>Discrepancy</h4>
            <p>Sum of PO values does not match sum of line item selling prices.</p>
            <div class="subsection">
                <h5 class="subsection-heading">Comparison: Items to PO</h5>
                <PriceComparisonTable   currency = {props.currency}
                                        difference = {props.data.difference}
                                        first_title = 'PO Sum'
                                        first_value = {props.data.total_po_value}
                                        second_title = 'Line Items Sum'
                                        second_value = {props.data.total_items_value}
                                        />
            </div>
        </div>
    ]
}

function PriceComparisonTable(props){
    var difference_as_perc = props.difference / props.second_value * 100;
    return [
        <table id="po-discrepancy" class="price-comparison">
            <tr><th>{props.first_title}</th><td>{props.currency}</td><td class="po-total-price-f number">{props.first_value.toFixed(2)}</td><td></td></tr>
            <tr><th>{props.second_title}</th><td>{props.currency }</td><td class="selling-price number">{props.second_value.toFixed(2)}</td><td></td></tr>
            <tr class="conclusion"><th>Difference</th><td>{props.currency}</td><td class="diff-val number">{props.difference.toFixed(2)}</td><td><span class="diff-perc">{difference_as_perc.toFixed(2)}</span></td></tr>
        </table>
    ]
}


// Actual list of POs
function JobPoList(props){
    return [
        <div class="job-po-container">
            {props.po_list.map((po) =>
                <JobPoElement   key = {po.po_id.toString()}
                                currency = {props.currency}
                                data = {po}/>
            )}
        </div>
    ]
}
function JobPoElement(props){
    return [
        <div class="po-row">
            <div class="details">
                <span class="reference">{props.data.reference}</span> dated <span class="date_on_po">{props.data.date_on_po}</span> for <span class="currency">{props.currency}</span> <span class="value">{props.value}</span> (received <span class="date_received">{props.data.date_received}</span>)
                <button type="button" class="po-edit edit-icon" data-po={props.data.po_id}><span>edit</span></button>
            </div>
        </div>
    ]
}

