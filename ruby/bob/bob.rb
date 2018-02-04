class Bob
  class << self
    def hey(remark)
      case remark
      when /^[\d\s,]*$/
        "Whatever."
      when /^[a-z\d\W]*\?$/
        'Sure.'
      when /^[A-Z\W\d]*$/
        'Whoa, chill out!'
      else
        "Whatever."
      end
    end
  end
end