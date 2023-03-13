export const createPageBreak = () => {
    return {
        section: "page_break"
    }
}

export const createEmptySectionBase = () => {
    return {
        title: "",
        description: "",
        section: undefined,
        content: undefined
    }
}

export const createEmptyBandOverviewSection = () => {
    const base = createEmptySectionBase();
    return {
        ...base,
        section: "band_overview",
        header: "Band Overview",
        content: {
            rows: []
        }
    }
}

export const createEmptyBandOverviewRow = () => ({
    name: "",
    instrument: "",
    channels: "",
    notes: ""
})

export const createEmptyChannelListSection = () => {
    const base = createEmptySectionBase();
    return {
        ...base,
        section: "channel_list",
        header: "Channel List",
        content: {
            rows: []
        }
    }
}

export const createEmptyChannelListRow = () => ({
    instrument: "",
    input: "",
    phantom: "",
    stand: "",
    is_highlighted: false,
})

export const createEmptyContactsSection = () => {
    const base = createEmptySectionBase();
    return {
        ...base,
        section: "contacts",
        header: "Contacts",
        content: {
            common_contact: "",
            named_contacts: []
        }
    }
}

export const createEmptyNamedContact = () => ({
    name: "",
    role: "",
    phone: "",
    email: ""
})

export const createEmptyEquipmentListSection = () => {
    const base = createEmptySectionBase();
    return {
        ...base,
        section: "equipment_list",
        header: "Equipment List",
        content: {
            rows: []
        }
    }
}

export const createEmptyEquipmentListRow = () => ({
    item: "",
    count: "",
    is_group: false,
    is_highlighted: false,
})

export const createEmptyMembersSection = () => {
    const base = createEmptySectionBase();
    return {
        ...base,
        section: "members",
        header: "Members",
        content: {
            members: []
        }
    }
}

export const createEmptyMember = () => ({
    name: "",
    roles: ""
})

export const createEmptyMonitoringSection = () => {
    const base = createEmptySectionBase();
    return {
        ...base,
        section: "monitoring",
        header: "Monitoring",
        content: {
            rows: []
        }
    }
}

export const createEmptyMonitoringRow = () => ({
    players: "",
    mix: ""
})

export const createEmptyRequirementsSection = () => {
    const base = createEmptySectionBase();
    return {
        ...base,
        section: "requirements",
        header: "Requirements",
        content: {
            requirements: []
        }
    }
}

export const createEmptyRequirement = () => ({
    title: "",
    content: ""
})

export const createEmptyStagePlanSection = () => {
    const base = createEmptySectionBase();
    return {
        ...base,
        section: "stage_plan",
        header: "Stage Plan",
        content: {
            stage_plan: ""
        }
    }
}

export const createEmptyTitleSection = () => {
    const base = createEmptySectionBase();
    return {
        ...base,
        section: "title_section",
        header: "Title Section",
        content: {
            header: "",
            band_title: "",
            socials: []
        }
    }
}

export const createEmptySocial = () => {
    return {
        service: "",
        tag: "",
    }
}

export const createEmptyDocument = () => {
    return {
        title: "",
        band: "",
        revision: "",
        footer_text: "",
        language: "",
        page: {
            size: "",
            margin_top: "",
            margin_bottom: "",
            margin_side: ""
        }
    }
}
