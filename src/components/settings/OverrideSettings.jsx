import React from 'react'
import { Form, Button, OverlayTrigger } from 'react-bootstrap'
import { renderTooltip } from '../../utils/tooltip';

export default function OverrideSettings({
  respectOverrides,
  setRespectOverrides
}) {
  return (
    <div id='override-settings' className='settings-group p-2 row'>
      <Form.Label>Manual Category Override Settings</Form.Label>
      <Form.Group className='col-12 mb-2'>
        <OverlayTrigger
          placement='top'
          overlay={(props) => renderTooltip(
            props,
            'respect-overrides-tip',
            'When checked, transactions you\'ve manually moved between categories won\'t be affected by filter changes. When unchecked, all transactions will be re-categorized based on current filters.'
          )}
        >
          <Form.Check 
            type="checkbox" 
            id="respect-overrides-checkbox"
            label="Prioritize manual category changes" 
            checked={respectOverrides}
            onChange={(e) => setRespectOverrides(e.target.checked)}
          />
        </OverlayTrigger>
      </Form.Group>
    </div>
  )
}
