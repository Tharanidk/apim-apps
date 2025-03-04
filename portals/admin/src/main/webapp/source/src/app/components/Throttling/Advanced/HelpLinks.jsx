/*
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HelpBase from 'AppComponents/AdminPages/Addons/HelpBase';
import DescriptionIcon from '@mui/icons-material/Description';
import Link from '@mui/material/Link';
import Configurations from 'Config';

/**
 * Render the help link list
 * @returns {JSX} Returns a list of links.
 */
export default function HelpLinks() {
    return (
        <HelpBase>
            <List component='nav' aria-label='main mailbox folders'>
                <ListItem button>
                    <ListItemIcon>
                        <DescriptionIcon />
                    </ListItemIcon>
                    <Link
                        target='_blank'
                        href={Configurations.app.docUrl
                            + 'design/rate-limiting/introducing-throttling-use-cases/'}
                        underline='hover'
                    >
                        <ListItemText primary={(
                            <FormattedMessage
                                id='Throttling.Advanced.List.help.link.one'
                                defaultMessage='Introducing Rate Limiting Use-Cases'
                            />
                        )}
                        />

                    </Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DescriptionIcon />
                    </ListItemIcon>
                    <Link
                        target='_blank'
                        href={Configurations.app.docUrl
                            + 'design/rate-limiting/adding-new-throttling-policies/'
                            + '#adding-a-new-advanced-throttling-policy'}
                        underline='hover'
                    >
                        <ListItemText primary={(
                            <FormattedMessage
                                id='Throttling.Advanced.List.help.link.two'
                                defaultMessage='Adding a new advanced rate limiting policy'
                            />
                        )}
                        />

                    </Link>
                </ListItem>
            </List>
        </HelpBase>
    );
}
