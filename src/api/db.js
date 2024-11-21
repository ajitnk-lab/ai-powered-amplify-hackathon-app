/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// This function is called immediately when the page loads, before populating the table with this data
import { Auth, API } from "aws-amplify";
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

// This function is called immediately when the page loads, before populating the table with this data
export async function getUserItems() {

    let user = await Auth.currentAuthenticatedUser();
    if(!user) // return empty list if not logged in
        return [];
    
    let shopList = await API.graphql({ query: queries.listShoppingListItems});
    console.log(shopList.data)
    return shopList.data.listShoppingListItems.items
    
}

// This function is called when a user clicks the button 'Add'
export async function addItem(itemName) {

    // create json input for GraphQL
    let itemDetails = {
        itemName: itemName,
    };

    let addedItem = await API.graphql({ query: mutations.createShoppingListItem, variables: {input: itemDetails}});
    console.log("Added ", addedItem)
    return addedItem.data.createShoppingListItem;
    
}

// This function is called when a user deletes an existing item in the table
export async function deleteItem(itemId) {

    console.log("Deleting ", itemId)
    let itemDetails = {
        id: itemId
    };

    let deletedItem = await API.graphql({ query: mutations.deleteShoppingListItem, variables: {input: itemDetails}});
    console.log("Deleted ", deletedItem)
    return deletedItem;
}
